//write your code here

// p1
const reverseString = (s) => {
	let r = "";
	for (let i = s.length - 1; i >= 0; i--) r += s[i];
	return r;
}
// console.log(reverseString("hello"));

// p2
const reverseZigZagString = (s) => {
	const setCase = (c, l) => {
		return l ? c.toUpperCase() : c.toLowerCase();
	}

	const iterative = (str) => {
		let i = 0;
		let ri = reverseString(str);
		let zi = "";
        let ll = false;
		
		while (i < ri.length) {
			if ((/[a-zA-Z]/).test(ri[i])) {
                zi += setCase(ri[i], ll);
                ll = !ll;
            }
			else zi += ri[i];
			i++;
	    }
        
		return zi;
	}

    const recursive = (a, i, start, str, ll, z) => {
        let za = "";
        let o = ll? ll.toLowerCase() === ll : false;

        if (i === 0 || !o) {
            za += reverseZigZagString(reverseString(a[i])); // either first word or word starting with lowercase
        }
        else {
            for (let index = start; index < str.length; index++) {    
			    za += setCase(a[i][index], o); // even indices uppercase, odd indices lowercase
				o = !o;
            }
        }

        return za;
    }

	if (/[^a-zA-Z]{2,}/.test(s) || /[^a-zA-Z\s]/.test(s) || /[\s]/.test(s) && s.split(" ").length >= 1000) return iterative(s);

	let r = reverseString(s).trim(); // reversed s
	let a = r.split(" "); // splits s into components where spaces are identified
	let z = ""; // zigzag string

	if (a.length > 1) {
		for (let i = 0; i < a.length; i++) {
            const first = a[i].search(/[a-zA-Z]/); // the first letter in a[i]
            if (first === -1) return z;

            for (let index = 0; index < first; index++) {
                z += a[i][index];
            }

			matches = z.match(/[a-zA-Z]+/g);

			if (i === 0) z += recursive(a, i, first, a[i], a[i][first], z);
            else z += recursive(a, i, first, a[i], matches[matches.length -1][matches[matches.length -1].length - 1], z);

            if (i < a.length - 1) z += " "; // add space if not last word
		}
		return z;
	}

	for (let i = 0; i < r.length; i++) {
		z += setCase(r[i], i % 2 !== 0); // set case of char at i depending on whether i is even
	}

	return z;
}

// checks iterative
console.log(reverseZigZagString("helloo")) //"oOlLeH"
console.log(reverseZigZagString("Fellows"))    //"sWoLlEf"

// checks recursive
console.log(reverseZigZagString("Code Challenge"))  //"eGnElLaHc EdOc"
console.log(reverseZigZagString("i am")); // "mA i"
console.log(reverseZigZagString("yes yes")); // "sEy SeY"
console.log(reverseZigZagString("so much to do")); // "oD oT hCuM oS"

//checks for non-space punctuation and consecutive non-letter characters
console.log(reverseZigZagString("you up?"))
console.log(reverseZigZagString("hello   there"));
console.log(reverseZigZagString("I'm here"));

// checks for overflow error
// 999 words
console.log(reverseZigZagString("Ut placet inquam Tum dicere exorsus est Primum igitur inquit sic agam ut ipsi auctori huius disciplinae placet constituam quid et quale sit id de quo quaerimus non quo ignorare vos arbitrer sed ut ratione et via procedat oratio Quaerimus igitur quid sit extremum et ultimum bonorum quod omnium philosophorum sententia tale debet esse ut ad id omnia referri oporteat ipsum autem nusquam Hoc Epicurus in voluptate ponit quod summum bonum esse vult summumque malum dolorem idque instituit docere sic Omne animal simul atque natum sit voluptatem appetere eaque gaudere ut summo bono dolorem aspernari ut summum malum et quantum possit a se repellere idque facere nondum depravatum ipsa natura incorrupte atque integre iudicante Itaque negat opus esse ratione neque disputatione quam ob rem voluptas expetenda fugiendus dolor sit Sentiri haec putat ut calere ignem nivem esse albam dulce mel Quorum nihil oportere exquisitis rationibus confirmare tantum satis esse admonere Interesse enim inter argumentum conclusionemque rationis et inter mediocrem animadversionem atque admonitionem Altera occulta quaedam et quasi involuta aperiri altera prompta et aperta iudicari Etenim quoniam detractis de homine sensibus reliqui nihil est necesse est quid aut ad naturam aut contra sit a natura ipsa iudicari Ea quid percipit aut quid iudicat quo aut petat aut fugiat aliquid praeter voluptatem et dolorem Sunt autem quidam e nostris qui haec subtilius velint tradere et negent satis esse quid bonum sit aut quid malum sensu iudicari sed animo etiam ac ratione intellegi posse et voluptatem ipsam per se esse expetendam et dolorem ipsum per se esse fugiendum Itaque aiunt hanc quasi naturalem atque insitam in animis nostris inesse notionem ut alterum esse appetendum alterum aspernandum sentiamus Alii autem quibus ego assentior cum a philosophis compluribus permulta dicantur cur nec voluptas in bonis sit numeranda nec in malis dolor non existimant oportere nimium nos causae confidere sed et argumentandum et accurate disserendum et rationibus conquisitis de voluptate et dolore disputandum putant Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint obcaecati cupiditate non provident similique sunt in culpa qui officia deserunt mollitia animi id est laborum et dolorum fuga Et harum quidem rerum facilis est et expedita distinctio Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda est omnis dolor repellendus Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat Hanc ego cum teneam sententiam quid est cur verear ne ad eam non possim accommodare Torquatos nostros Quos tu paulo ante cum memoriter tum etiam erga nos amice et benivole collegisti nec me tamen laudandis maioribus meis corrupisti nec segniorem ad respondendum reddidisti Quorum facta quem ad modum quaeso interpretaris Sicine eos censes aut in armatum hostem impetum fecisse aut in liberos atque in sanguinem suum tam crudelis fuisse nihil ut de utilitatibus nihil ut de commodis suis cogitarent At id ne ferae quidem faciunt ut ita ruant itaque turbent ut earum motus et impetus quo pertineant non intellegamus tu tam egregios viros censes tantas res gessisse sine causa Quae fuerit causa mox videro interea hoc tenebo si ob aliquam causam ista quae sine dubio praeclara sunt fecerint virtutem iis per se ipsam causam non fuisse  Torquem detraxit hosti  Et quidem se texit ne interiret  At magnum periculum adiit  In oculis quidem exercitus  Quid ex eo est consecutus  Laudem et caritatem quae sunt vitae sine metu degendae praesidia firmissima  Filium morte multavit  Si sine causa nollem me ab eo ortum tam inportuno tamque crudeli sin ut dolore suo sanciret militaris imperii disciplinam exercitumque in gravissimo bello animadversionis metu contineret saluti prospexit civium qua intellegebat contineri suam Atque haec ratio late patet In quo enim maxime consuevit iactare vestra se oratio tua praesertim qui studiose antiqua persequeris claris et fortibus viris commemorandis eorumque factis non emolumento aliquo sed ipsius honestatis decore laudandis id totum evertitur eo delectu rerum quem modo dixi constituto ut aut voluptates omittantur maiorum voluptatum adipiscendarum causa aut dolores suscipiantur maiorum dolorum effugiendorum gratia Sed de clarorum hominum factis illustribus et gloriosis satis hoc loco dictum sit Erit enim iam de omnium virtutum cursu ad voluptatem proprius disserendi locus Nunc autem explicabo voluptas ipsa quae qualisque sit ut tollatur error omnis imperitorum intellegaturque ea quae voluptaria delicata mollis habeatur disciplina quam gravis quam continens quam severa sit Non enim hanc solam sequimur quae suavitate aliqua naturam ipsam movet et cum iucunditate quadam percipitur sensibus sed maximam voluptatem illam habemus quae percipitur omni dolore detracto nam quoniam cum privamur dolore ipsa liberatione et vacuitate omnis molestiae gaudemus omne autem id quo gaudemus voluptas est ut omne quo offendimur dolor doloris omnis privatio recte nominata est voluptas Ut enim cum cibo et potione fames sitisque depulsa est ipsa detractio molestiae consecutionem affert voluptatis sic in omni re doloris amotio successionem efficit voluptatis Itaque non placuit Epicuro medium esse se quiddam inter dolorem et voluptatem illud enim ipsum quod quibusdam medium videretur cum omni dolore careret careret careret careret careret careret careret careret"));
// 1000 words
console.log(reverseZigZagString("Ut placet inquam Tum dicere exorsus est Primum igitur inquit sic agam ut ipsi auctori huius disciplinae placet constituam quid et quale sit id de quo quaerimus non quo ignorare vos arbitrer sed ut ratione et via procedat oratio Quaerimus igitur quid sit extremum et ultimum bonorum quod omnium philosophorum sententia tale debet esse ut ad id omnia referri oporteat ipsum autem nusquam Hoc Epicurus in voluptate ponit quod summum bonum esse vult summumque malum dolorem idque instituit docere sic Omne animal simul atque natum sit voluptatem appetere eaque gaudere ut summo bono dolorem aspernari ut summum malum et quantum possit a se repellere idque facere nondum depravatum ipsa natura incorrupte atque integre iudicante Itaque negat opus esse ratione neque disputatione quam ob rem voluptas expetenda fugiendus dolor sit Sentiri haec putat ut calere ignem nivem esse albam dulce mel Quorum nihil oportere exquisitis rationibus confirmare tantum satis esse admonere Interesse enim inter argumentum conclusionemque rationis et inter mediocrem animadversionem atque admonitionem Altera occulta quaedam et quasi involuta aperiri altera prompta et aperta iudicari Etenim quoniam detractis de homine sensibus reliqui nihil est necesse est quid aut ad naturam aut contra sit a natura ipsa iudicari Ea quid percipit aut quid iudicat quo aut petat aut fugiat aliquid praeter voluptatem et dolorem Sunt autem quidam e nostris qui haec subtilius velint tradere et negent satis esse quid bonum sit aut quid malum sensu iudicari sed animo etiam ac ratione intellegi posse et voluptatem ipsam per se esse expetendam et dolorem ipsum per se esse fugiendum Itaque aiunt hanc quasi naturalem atque insitam in animis nostris inesse notionem ut alterum esse appetendum alterum aspernandum sentiamus Alii autem quibus ego assentior cum a philosophis compluribus permulta dicantur cur nec voluptas in bonis sit numeranda nec in malis dolor non existimant oportere nimium nos causae confidere sed et argumentandum et accurate disserendum et rationibus conquisitis de voluptate et dolore disputandum putant Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint obcaecati cupiditate non provident similique sunt in culpa qui officia deserunt mollitia animi id est laborum et dolorum fuga Et harum quidem rerum facilis est et expedita distinctio Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda est omnis dolor repellendus Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat Hanc ego cum teneam sententiam quid est cur verear ne ad eam non possim accommodare Torquatos nostros Quos tu paulo ante cum memoriter tum etiam erga nos amice et benivole collegisti nec me tamen laudandis maioribus meis corrupisti nec segniorem ad respondendum reddidisti Quorum facta quem ad modum quaeso interpretaris Sicine eos censes aut in armatum hostem impetum fecisse aut in liberos atque in sanguinem suum tam crudelis fuisse nihil ut de utilitatibus nihil ut de commodis suis cogitarent At id ne ferae quidem faciunt ut ita ruant itaque turbent ut earum motus et impetus quo pertineant non intellegamus tu tam egregios viros censes tantas res gessisse sine causa Quae fuerit causa mox videro interea hoc tenebo si ob aliquam causam ista quae sine dubio praeclara sunt fecerint virtutem iis per se ipsam causam non fuisse  Torquem detraxit hosti  Et quidem se texit ne interiret  At magnum periculum adiit  In oculis quidem exercitus  Quid ex eo est consecutus  Laudem et caritatem quae sunt vitae sine metu degendae praesidia firmissima  Filium morte multavit  Si sine causa nollem me ab eo ortum tam inportuno tamque crudeli sin ut dolore suo sanciret militaris imperii disciplinam exercitumque in gravissimo bello animadversionis metu contineret saluti prospexit civium qua intellegebat contineri suam Atque haec ratio late patet In quo enim maxime consuevit iactare vestra se oratio tua praesertim qui studiose antiqua persequeris claris et fortibus viris commemorandis eorumque factis non emolumento aliquo sed ipsius honestatis decore laudandis id totum evertitur eo delectu rerum quem modo dixi constituto ut aut voluptates omittantur maiorum voluptatum adipiscendarum causa aut dolores suscipiantur maiorum dolorum effugiendorum gratia Sed de clarorum hominum factis illustribus et gloriosis satis hoc loco dictum sit Erit enim iam de omnium virtutum cursu ad voluptatem proprius disserendi locus Nunc autem explicabo voluptas ipsa quae qualisque sit ut tollatur error omnis imperitorum intellegaturque ea quae voluptaria delicata mollis habeatur disciplina quam gravis quam continens quam severa sit Non enim hanc solam sequimur quae suavitate aliqua naturam ipsam movet et cum iucunditate quadam percipitur sensibus sed maximam voluptatem illam habemus quae percipitur omni dolore detracto nam quoniam cum privamur dolore ipsa liberatione et vacuitate omnis molestiae gaudemus omne autem id quo gaudemus voluptas est ut omne quo offendimur dolor doloris omnis privatio recte nominata est voluptas Ut enim cum cibo et potione fames sitisque depulsa est ipsa detractio molestiae consecutionem affert voluptatis sic in omni re doloris amotio successionem efficit voluptatis Itaque non placuit Epicuro medium esse se quiddam inter dolorem et voluptatem illud enim ipsum quod quibusdam medium videretur cum omni dolore careret careret careret careret careret careret careret careret careret"));