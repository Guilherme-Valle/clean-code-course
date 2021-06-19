class Point:
    # coordX e coordY são nomes redundantes!
    # x e y dentro de uma classe Point são suficientemente claros
    def __init__(self, x, y):
        self.x = x
        self.y = y


class Rectangle:
    # "broad" etc são nomes inusuais, quase "slangs", width e height
    # são mais habituais e legíveis para largura e altura!
    # origin é mais conciso do que starting_point
    def __init__(self, origin, width, height):
        self.origin = origin
        self.width = width
        self.height = height

    # um método deve possuir um nome que descreva o que está sendo feito!
    # "area" soa como uma propriedade, get_area() descreve melhor
    def get_area(self):
        return self.width * self.height

    # top_right e bottom_left descrevem bem o que são as variáveis
    # o nome do método deve expressar o que ele faz!
    # coordinates é melhor do que end_points, e a função "printa"
    def print_coordinates(self):
        top_right = self.origin.x + self.width
        bottom_left = self.origin.y + self.height
        print('Starting Point (X)): ' + str(self.origin.x))
        print('Starting Point (Y)): ' + str(self.origin.y))
        print('End Point X-Axis (Top Right): ' + str(top_right))
        print('End Point Y-Axis (Bottom Left): ' + str(bottom_left))


def build_rectangle():
    rectangle_origin = Point(50, 100)
    rectangle = Rectangle(rectangle_origin, 90, 10)

    return rectangle


rectangle = build_rectangle()

print(rectangle.get_area())
rectangle.print_coordinates()