function Game()
{
	function Question(question, answers, correct)
	{
		this.question = question;
		this.answers = answers;
		this.correct = correct; 
	}

	Question.prototype.displayQuestion = function()
	{
		console.log(this.question);

		for (var i = 0; i < this.answers.length; i++)
		{
			console.log(i + ' : ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(ans)
	{
		if (ans === this.correct)
		{
			Skor_Akhir += 1;
			console.log('Jawaban anda BENAR!!');
			console.log('');
		}
		else
		{
			console.log('Jawaban anda SALAH!! Coba lagi!');
			Salah_Jawab +=1;
			console.log('');
		}
	}

	var ql = new Question('Siapakah nama bagian keuangan Stikom Yos Sudarso?',
	['Bu Ani', 'Bu Yuliana', 'Bu Ety', 'Bu Yulia'],
	'0'); 
	var q2 = new Question('Siapa nama dosen terkece di Stikom?',
	['Adi', 'Padosroha', 'Putu', 'Oskar'],
	'3');
	var q3 = new Question('Berapa jumlah toilet di STIKOM?',
	['satu', 'Enam', 'sepuluh', 'dua belas'],
	'3');
	var q4 = new Question('Berapa Jumlah Satpam STIKOM?',
	['3', '2','1'],
	'0');
	var q5 = new Question('Siapa nama ketua STIKOM ?',
	['Suradji', 'Ary', 'Dhani'],
	'0');
    var q6 = new Question('Apakah STIKOM sudah rapi ?',
	['Sudah', 'Belum'],
	'1');
    var q7 = new Question('Apakah STIKOM sudah bersih ?',
	['Sudah', 'Belum'],
	'1');
    var q8 = new Question('Apakah STIKOM sudah Indah ?',
	['Sudah', 'Belum'],
	'0');
    var q9 = new Question('Apakah STIKOM sudah disiplin ?',
	['Sudah', 'Belum'],
	'1');
    var q10 = new Question('Apakah anda bangga kuliah di STIKOM ?',
	['Bangga', 'Tidak'],
	'0');
    
    
	var questions = [ql, q2, q3, q4, q5, q6, q7, q8, q9, q10];
	var Skor_Akhir = 0;
	var Salah_Jawab = 0;
	var Jumlah_Pertanyaan = 0;
		
	Berhenti:
	{
		for (;;)
		{
			var n = Math.floor(Math.random() * questions.length);

			questions[n].displayQuestion();

			var answer = prompt('Pilih jawaban yang benar!');

			if (answer == 'Exit')
			{
				console.log('');
				console.log('---Keluar Dari Permainan---');
				console.log('');
				console.log('Jumlah pertanyaan yang di jawab = ' + Jumlah_Pertanyaan);
				console.log('Jumlah jawaban yang salah = ' + Salah_Jawab);
				console.log('Skor akhir anda = ' + Skor_Akhir);
				break Berhenti;
			}

			Jumlah_Pertanyaan += 1 ;
			questions[n].checkAnswer(answer);
		}
	}
};