import cv2
from PIL import Image
from util import get_limits

cap = cv2.VideoCapture(0)

 
colors = {
    "yellow": [0, 225, 225],
    "blue": [255, 0, 0],
    "green": [0, 255, 0],
    "red": [0, 0, 255],
    "purple": [255, 0, 255],
    "orange": [0, 165, 255],
    "pink": [255, 105, 180],
    "cyan": [255, 255, 0],
    "magenta": [255, 0, 255]
}

while True:
    ret, frame = cap.read()
    hsvImage = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    
    for color_name, bgr_value in colors.items():
        lowerLimit, upperLimit = get_limits(color_name)
        if lowerLimit is not None and upperLimit is not None:
            mask = cv2.inRange(hsvImage, lowerLimit, upperLimit)
            mask_ = Image.fromarray(mask)
            bbox = mask_.getbbox()

            if bbox is not None:
                x1, y1, x2, y2 = bbox
                
                frame = cv2.rectangle(frame, (x1, y1), (x2, y2), bgr_value, 2)
                
                cv2.putText(frame, color_name, (x1, y1-10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, bgr_value, 2)
                
        
        if color_name == "red":
            lowerLimit, upperLimit = get_limits("red2")
            if lowerLimit is not None and upperLimit is not None:
                mask = cv2.inRange(hsvImage, lowerLimit, upperLimit)
                mask_ = Image.fromarray(mask)
                bbox = mask_.getbbox()

                if bbox is not None:
                    x1, y1, x2, y2 = bbox
                    
                    frame = cv2.rectangle(frame, (x1, y1), (x2, y2), bgr_value, 2)
                    cv2.putText(frame, color_name, (x1, y1-10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, bgr_value, 2)

    cv2.imshow('frame', frame)
    
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
