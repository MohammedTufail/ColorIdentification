import numpy as np

def get_limits(color_name):
    
    color_ranges = {
        "yellow": ([20, 100, 100], [30, 255, 255]),
        "blue": ([100, 150, 0], [140, 255, 255]),
        "green": ([40, 70, 70], [80, 255, 255]),
        "red": ([0, 150, 150], [10, 255, 255]),  
        "red2": ([170, 150, 150], [180, 255, 255]),  
        "purple": ([130, 100, 100], [160, 255, 255]),
        "orange": ([10, 150, 150], [20, 255, 255]),
        "pink": ([160, 100, 100], [170, 255, 255]),
        "cyan": ([80, 150, 150], [100, 255, 255]),
        "magenta": ([140, 150, 150], [170, 255, 255]),
    }
    
    
    if color_name in color_ranges:
        lowerLimit, upperLimit = color_ranges[color_name]
        return np.array(lowerLimit, dtype=np.uint8), np.array(upperLimit, dtype=np.uint8)
    
    return None, None
