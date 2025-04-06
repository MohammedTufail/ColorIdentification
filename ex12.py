import numpy as np
import cv2

def get_limits(hsv_color):
    # Get the HSV range for the selected color
    h = hsv_color[0]
    s = hsv_color[1]
    v = hsv_color[2]

    lowerLimit = np.array([h - 10, 100, 100], dtype=np.uint8)
    upperLimit = np.array([h + 10, 255, 255], dtype=np.uint8)

    return lowerLimit, upperLimit

# Function to map HSV values to a color name
def get_color_name(hsv_color):
    h = hsv_color[0]
    if h < 10 or h > 160:
        return "Red"
    elif 10 < h < 25:
        return "Orange"
    elif 25 < h < 35:
        return "Yellow"
    elif 35 < h < 85:
        return "Green"
    elif 85 < h < 125:
        return "Blue"
    elif 125 < h < 160:
        return "Purple"
    else:
        return "Unknown"
