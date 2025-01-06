import type {
	PastSupport,
	Committee,
	Constituency,
} from './types';

export const pastSupport: PastSupport = {
	pis: 36.16,
	ko: 37.06,
	td: 6.91,
	lewica: 6.3,
	konfederacja: 12.33,
};

export const committees: Committee[] = [
	{
		id: 'pis',
		name: 'Prawo i Sprawiedliwość',
		shortName: 'PiS',
		threshold: 5,
		pastSupportEquivalence: [['pis', 1]],
	},
	{
		id: 'ko',
		name: 'Koalicja Obywatelska',
		shortName: 'KO',
		threshold: 8,
		pastSupportEquivalence: [['ko', 1]],
	},
	{
		id: 'td',
		name: 'Trzecia Droga',
		shortName: 'TD',
		threshold: 8,
		pastSupportEquivalence: [['td', 1]],
	},
	{
		id: 'lewica',
		name: 'Lewica',
		shortName: 'Lew.',
		threshold: 5,
		pastSupportEquivalence: [['lewica', 1]],
	},
	{
		id: 'konfederacja',
		name: 'Konfederacja',
		shortName: 'Konf.',
		threshold: 5,
		pastSupportEquivalence: [['konfederacja', 1]],
	},
	{
		id: 'mn',
		name: 'Mniejszość Niemiecka',
		shortName: 'MN',
		threshold: 0,
		pastSupportEquivalence: [],
	},
];

export const benchSort = [
	'lewica',
	'ko',
	'mn',
	'td',
	'pis',
	'konfederacja',
];

export const constituencies: Constituency[] = [
	{
		name: 'Legnica',
		size: 12,
		pastSupport: {
			pis: 38,
			ko: 37,
			td: 5,
			lewica: 8,
			konfederacja: 12,
		},
	},
	{
		name: 'Wałbrzych',
		size: 8,
		pastSupport: {
			ko: 35,
			pis: 43,
			td: 10,
			lewica: 7,
			konfederacja: 10,
		},
	},
	{
		name: 'Wrocław',
		size: 14,
		pastSupport: {
			ko: 43,
			pis: 28,
			td: 5,
			lewica: 12,
			konfederacja: 12,
		},
	},
	{
		name: 'Bydgoszcz',
		size: 12,
		pastSupport: {
			ko: 42,
			pis: 34,
			td: 8,
			lewica: 5,
			konfederacja: 11,
		},
	},
	{
		name: 'Toruń',
		size: 13,
		pastSupport: {
			pis: 35,
			ko: 41,
			td: 10,
			lewica: 5,
			konfederacja: 9,
		},
	},
	{
		name: 'Lublin',
		size: 15,
		pastSupport: {
			pis: 46,
			ko: 28,
			td: 6,
			konfederacja: 4,
			lewica: 16,
		},
	},
	{
		name: 'Chełm',
		size: 12,
		pastSupport: {
			pis: 51,
			ko: 23,
			td: 8,
			konfederacja: 15,
			lewica: 3,
		},
	},
	{
		name: 'Zielona Góra',
		size: 12,
		pastSupport: {
			ko: 45,
			pis: 30,
			td: 6,
			lewica: 10,
			konfederacja: 9,
		},
	},
	{
		name: 'Łódź',
		size: 10,
		pastSupport: {
			ko: 44,
			pis: 27,
			lewica: 16,
			td: 4,
			konfederacja: 16,
		},
	},
	{
		name: 'Piotrków Trybunalski',
		size: 9,
		pastSupport: {
			pis: 50,
			ko: 24,
			td: 7,
			konfederacja: 13,
			lewica: 6,
		},
	},
	{
		name: 'Sieradz',
		size: 12,
		pastSupport: {
			pis: 44,
			ko: 30,
			td: 7,
			lewica: 8,
			konfederacja: 11,
		},
	},
	{
		name: 'Chrzanów',
		size: 8,
		pastSupport: {
			pis: 46,
			ko: 29,
			td: 7,
			konfederacja: 15,
			lewica: 3,
		},
	},
	{
		name: 'Kraków',
		size: 14,
		pastSupport: {
			ko: 31,
			pis: 37,
			td: 7,
			lewica: 9,
			konfederacja: 14,
		},
	},
	{
		name: 'Nowy Sącz',
		size: 10,
		pastSupport: {
			pis: 58,
			ko: 19,
			td: 6,
			konfederacja: 15,
			lewica: 2,
		},
	},
	{
		name: 'Tarnów',
		size: 9,
		pastSupport: {
			pis: 51,
			td: 8,
			ko: 23,
			konfederacja: 16,
			lewica: 2,
		},
	},
	{
		name: 'Płock',
		size: 10,
		pastSupport: {
			pis: 46,
			ko: 29,
			td: 9,
			konfederacja: 12,
			lewica: 4,
		},
	},
	{
		name: 'Radom',
		size: 9,
		pastSupport: {
			pis: 51,
			ko: 25,
			td: 7,
			konfederacja: 13,
			lewica: 4,
		},
	},
	{
		name: 'Siedlce',
		size: 12,
		pastSupport: {
			pis: 52,
			ko: 20,
			td: 11,
			konfederacja: 14,
			lewica: 3,
		},
	},
	{
		name: 'Warszawa I',
		size: 20,
		pastSupport: {
			ko: 49,
			pis: 22,
			lewica: 12,
			td: 7,
			konfederacja: 10,
		},
	},
	{
		name: 'Warszawa II',
		size: 12,
		pastSupport: {
			ko: 39,
			pis: 32,
			td: 8,
			konfederacja: 14,
			lewica: 7,
		},
	},
	{
		name: 'Opole',
		size: 12,
		pastSupport: {
			ko: 45,
			pis: 32,
			td: 5,
			lewica: 6,
			konfederacja: 12,
		},
	},
	{
		name: 'Krosno',
		size: 11,
		pastSupport: {
			pis: 54,
			ko: 25,
			td: 4,
			konfederacja: 15,
			lewica: 2,
		},
	},
	{
		name: 'Rzeszów',
		size: 15,
		pastSupport: {
			pis: 53,
			ko: 24,
			td: 5,
			konfederacja: 16,
			lewica: 2,
		},
	},
	{
		name: 'Białystok',
		size: 14,
		pastSupport: {
			pis: 42,
			ko: 30,
			td: 10,
			konfederacja: 15,
			lewica: 3,
		},
	},
	{
		name: 'Gdańsk',
		size: 12,
		pastSupport: {
			ko: 54,
			pis: 26,
			td: 5,
			lewica: 6,
			konfederacja: 9,
		},
	},
	{
		name: 'Gdynia',
		size: 14,
		pastSupport: {
			ko: 50,
			pis: 31,
			td: 5,
			lewica: 4,
			konfederacja: 10,
		},
	},
	{
		name: 'Bielsko-Biała',
		size: 9,
		pastSupport: {
			pis: 41,
			ko: 38,
			td: 6,
			konfederacja: 11,
			lewica: 4,
		},
	},
	{
		name: 'Częstochowa',
		size: 7,
		pastSupport: {
			pis: 42,
			ko: 35,
			td: 7,
			lewica: 6,
			konfederacja: 10,
		},
	},
	{
		name: 'Gliwice',
		size: 9,
		pastSupport: {
			ko: 47,
			pis: 33,
			td: 5,
			lewica: 5,
			konfederacja: 10,
		},
	},
	{
		name: 'Rybnik',
		size: 9,
		pastSupport: {
			pis: 42,
			ko: 40,
			td: 4,
			konfederacja: 11,
			lewica: 3,
		},
	},
	{
		name: 'Katowice',
		size: 12,
		pastSupport: {
			ko: 46,
			pis: 32,
			td: 7,
			lewica: 5,
			konfederacja: 10,
		},
	},
	{
		name: 'Sosnowiec',
		size: 9,
		pastSupport: {
			ko: 46,
			pis: 34,
			lewica: 7,
			td: 4,
			konfederacja: 9,
		},
	},
	{
		name: 'Kielce',
		size: 16,
		pastSupport: {
			pis: 47,
			ko: 21,
			td: 14,
			lewica: 5,
			konfederacja: 13,
		},
	},
	{
		name: 'Elbląg',
		size: 8,
		pastSupport: {
			pis: 34,
			ko: 46,
			td: 6,
			lewica: 4,
			konfederacja: 10,
		},
	},
	{
		name: 'Olsztyn',
		size: 10,
		pastSupport: {
			ko: 46,
			pis: 31,
			td: 6,
			lewica: 5,
			konfederacja: 12,
		},
	},
	{
		name: 'Kalisz',
		size: 12,
		pastSupport: {
			pis: 39,
			ko: 31,
			td: 9,
			lewica: 6,
			konfederacja: 15,
		},
	},
	{
		name: 'Konin',
		size: 9,
		pastSupport: {
			pis: 39,
			ko: 30,
			td: 9,
			lewica: 7,
			konfederacja: 15,
		},
	},
	{
		name: 'Piła',
		size: 9,
		pastSupport: {
			ko: 38,
			pis: 29,
			td: 12,
			lewica: 7,
			konfederacja: 14,
		},
	},
	{
		name: 'Poznań',
		size: 10,
		pastSupport: {
			ko: 51,
			pis: 19,
			td: 8,
			lewica: 11,
			konfederacja: 11,
		},
	},
	{
		name: 'Koszalin',
		size: 8,
		pastSupport: {
			ko: 44,
			pis: 32,
			td: 6,
			lewica: 9,
			konfederacja: 9,
		},
	},
	{
		name: 'Szczecin',
		size: 12,
		pastSupport: {
			ko: 46,
			pis: 29,
			td: 6,
			lewica: 9,
			konfederacja: 10,
		},
	},
];
