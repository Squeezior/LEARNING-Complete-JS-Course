/*let js = 'amazing';
			console.log(40 + 8 + 23 - 10);

      console.log('Matt');
      console.log(23);

      let firstName = 'Matt';
      console.log(firstName);

      let myFirstJob = 'Programmer';
      let myCurrentJob = 'Teacher';

      console.log(myFirstJob);*/

/*
const MarksMass = 78;
const MarksHeight = 1.69;

const JohnsMass = 92;
const JohnsHeight = 1.95;

const MarksMass2 = 95;
const MarksHeight2 = 1.88;

const JohnsMass2 = 85;
const JohnsHeight2 = 1.76;

const MarksBMI = MarksMass / MarksHeight ** 2;
console.log(MarksBMI);
const MarksBMI2 = MarksMass2 / MarksHeight2 ** 2;
console.log(MarksBMI2);
const JohnsBMI = JohnsMass / JohnsHeight ** 2;
console.log(JohnsBMI);
const JohnsBMI2 = JohnsMass2 / JohnsHeight2 ** 2;
console.log(JohnsBMI2);

const markHigherBMI =
	MarksBMI > JohnsBMI
		? console.log(
				`Mark's BMI (${MarksBMI}) is higher than John's (${JohnsBMI})`
		  )
		: console.log(
				`John's BMI (${JohnsBMI}) is higher than Mark's (${MarksBMI})`
		  );

const markHigherBMI2 =
	MarksBMI2 > JohnsBMI2
		? console.log(
				`Mark's BMI (${MarksBMI2}) is higher than John's (${JohnsBMI2})`
		  )
		: console.log(
				`John's BMI (${JohnsBMI2}) is higher than Mark's (${MarksBMI2})`
		  );
*/

/*
// const DolphinsScore = [96, 108, 89];
// const KoalasScore = [88, 91, 110];

// const DolphinsScore = [97, 112, 101];
// const KoalasScore = [109, 95, 123];

const DolphinsScore = [97, 112, 101];
const KoalasScore = [109, 95, 106];

const DolphinsAvg = DolphinsScore.reduce(
	(acc, score) => acc + score / 3,
	0
);
console.log(`Dolphin's Average Score is: ${DolphinsAvg}`);

const KoalasAvg = KoalasScore.reduce(
	(acc, score) => acc + score / 3,
	0
);
console.log(`Koalas's Average Score is: ${KoalasAvg}`);

if (DolphinsAvg > KoalasAvg && DolphinsAvg >= 100) {
	console.log(`Dolphins Win`);
} else if (KoalasAvg > DolphinsAvg && KoalasAvg >= 100) {
	console.log(`Koalas Win`);
} else if (
	(DolphinsAvg === KoalasAvg, DolphinsAvg >= 100 && KoalasAvg >= 100)
) {
	console.log(`It's a Draw`);
}
*/

/*
// const billValue = 275;
// const billValue = 40;
const billValue = 430;

console.log(billValue);
let tipValue = 0;
tipValue =
	billValue >= 50 && billValue <= 300
		? (tipValue = tipValue + billValue * 0.15)
		: (tipValue = tipValue + billValue * 0.2);
console.log(tipValue);

console.log(
	`The bill was ${billValue}, the tip was ${tipValue}, and the total value ${
		billValue + tipValue
	}`
);
*/

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(total);

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
	if (avgDolphins >= 2 * avgKoalas) {
		console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
	} else if (avgKoalas >= 2 * avgDolphins) {
		console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
	} else {
		console.log(`No team wins...`);
	}
};

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);
*/

/*
const calcTip = (bill) =>
	bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [
	calcTip(bills[0]),
	calcTip(bills[1]),
	calcTip(bills[2]),
];
const total = [
	bills[0] + tips[0],
	bills[1] + tips[1],
	bills[2] + tips[2],
];

console.log(bills);
console.log(tips);
console.log(total);
*/

/*
const mark = {
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};

const john = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};

john.calcBMI();
mark.calcBMI();

mark.bmi > john.bmi
	? console.log(
			`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
	  )
	: console.log(
			`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
	  );
*/

/*
const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
	const tip = calcTip(bills[i]);
	tips.push(tip);
	totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/

/*
// º

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
	let str = '';
	for (let i = 0; i < arr.length; i++) {
		str += `${arr[i]}ºC in ${i + 1} days ... `;
	}
	console.log(` ... ` + str);
};

printForecast(data1);
*/
