import cv2
import numpy as np
from ex12 import get_limits, get_color_name

# Variables to store the selected point
selected_point = None
color_selected = False
selected_hsv = None

# Mouse callback function to get the clicked point on the video
def select_point(event, x, y, flags, param):
    global selected_point, color_selected, selected_hsv
    if event == cv2.EVENT_LBUTTONDOWN:
        selected_point = (x, y)
        color_selected = True

# Start capturing video
cap = cv2.VideoCapture(0)

# Create a window and set the mouse callback
cv2.namedWindow('Select Color')
cv2.setMouseCallback('Select Color', select_point)

while True:
    ret, frame = cap.read()

    if not ret:
        break

    # Convert the frame to HSV
    hsvImage = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

    # If a point is selected, get the color at that point
    if color_selected and selected_point is not None:
        x, y = selected_point
        selected_hsv = hsvImage[y, x]
        
        # Get the lower and upper limits for the selected color
        lowerLimit, upperLimit = get_limits(selected_hsv)

        # Create a mask to detect the selected color
        mask = cv2.inRange(hsvImage, lowerLimit, upperLimit)

        # Find contours and highlight the detected region
        contours, _ = cv2.findContours(mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
        for contour in contours:
            x, y, w, h = cv2.boundingRect(contour)
            frame = cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

        # Get the color name from the selected HSV value and show it on the frame
        color_name = get_color_name(selected_hsv)
        cv2.putText(frame, color_name, (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)

    # Show the frame
    cv2.imshow('Select Color', frame)

    # Exit on pressing 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the video capture and close windows
cap.release()
cv2.destroyAllWindows()
