# README

Solar System created with React and ThreeJS.

I wanted to display the real size, distances and rotation of each planet, but there are too much differences betweenn the sun and the planets and also the distances are too high between the planets before earth and after earth.
I have then reduce the size of the sun but kept the size scale of the planets.
About the distances i have reduced the distances between Earth the planet after (Jupiter, etc...)

I have also apply a coefficient of each distances to make them shorter and I have speed up the rotations.

Here the data i used:
Name Distance	Distance / 12742 / 10	Diameter	Diametre / 12720 * 10	Rotation (/1000)
Sun	0		1392700	1092.999529	88	32120
Mercury	62209000	488.2200596	4879	3.82906922	88	0.2410958904
Venus	108210000	849.238738	12104	9.499293674	224.7	0.6156164384
Earth	148980000	1169.204207	12742	10	365	1
Moon Earth	356000	2.793909904	3,474.80	2.72704442		0
Mars	216400000	1698.320515	6792	5.33040339	693.5	1.9
Jupiter	744950000	5846.413436	139822	109.7331659	4343.5	11.9
Saturne	1479100000	11608.06781	116464	91.40166379		29.5
Uranus	2948100000	23136.87019	51118	40.11772092		84
Neptune	4474500000	35116.15131	49493	38.84241092		164.8
Pluton	5900000000	46303.56302	2306	1.809762989		246

You can find the result here:
https://solar-system-react-threejs.herokuapp.com/
