import cv2
import pandas as pd
import os


image_path = r'C:\Users\Shahaan\Documents\ColorIdentification project\colorpic.jpg'


image = cv2.imread(image_path)

csv_path = 'c.csv'  


clicked = False
r = g = b = x_pos = y_pos = 0


index = ["color", "color_name", "hex", "R", "G", "B"]
csv = pd.read_csv(csv_path, names=index, header=None)


def get_color_name(R, G, B):
    minimum = 10000
    cname = ""
    for i in range(len(csv)):
        d = abs(R - int(csv.loc[i, "R"])) + abs(G - int(csv.loc[i, "G"])) + abs(B - int(csv.loc[i, "B"]))
        if d < minimum:
            minimum = d
            cname = csv.loc[i, "color_name"]
    return cname


def draw_function(event, x, y, flags, param):
    global b, g, r, x_pos, y_pos, clicked
    if event == cv2.EVENT_LBUTTONDBLCLK:
        clicked = True
        x_pos = x
        y_pos = y
        b, g, r = image[y, x]
        b = int(b)
        g = int(g)
        r = int(r)


cv2.namedWindow('image')
cv2.setMouseCallback('image', draw_function)

while True:
    cv2.imshow("image", image)
    if clicked:
        cv2.rectangle(image, (20, 20), (750, 60), (b, g, r), -1)
        text = f"{get_color_name(r, g, b)} R={r} G={g} B={b}"
        cv2.putText(image, text, (50, 50), 2, 0.8, (255, 255, 255), 2, cv2.LINE_AA)
        if r + g + b >= 600:
            cv2.putText(image, text, (50, 50), 2, 0.8, (0, 0, 0), 2, cv2.LINE_AA)
        clicked = False

    
    if cv2.waitKey(20) & 0xFF == 27:
        break

cv2.destroyAllWindows()
