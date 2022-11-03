valores = input('');

listaDeValores = valores.split(' ');

valorA = float(listaDeValores[0]);
valorB = float(listaDeValores[1]);
valorC = float(listaDeValores[2]);

def calcularDelta(a, b, c):
	return b**2 - 4 * a * c;

def calcularBhaskara(a, b, delta):
	return (-b + delta ** 0.5) / (2 * a), (-b - delta** 0.5) / (2 * a);

delta = calcularDelta(valorA, valorB, valorC);

if valorA == 0 or delta < 0:
    print('Impossivel calcular');
else:
    x1 = calcularBhaskara(valorA, valorB, delta)[0];
    x2 = calcularBhaskara(valorA, valorB, delta)[1];
    print('R1 =', "%.5f" % x1);
    print('R2 =', "%.5f" % x2);
