var priceList = {
'0':['0' , '250' , '500' , '750' , '1 000' , '1 500' , '2 000' , '2 500' , '3 000' , '3 500' , '4 000' , '4 500' , '5 000' , '5 500' , '6 000' , '6 500' , '7 000' , '7 500' , '8 000' , '8 500' , '9 000' , '9 500' , '10 000' , '11 000' , '12 000' , '13 000' , '14 000' , '15 000' , '17 500' , '20 000' , '22 500' , '25 000' , '27 500' , '30 000' , '32 500' , '35 000' , '37 500' , '40 000' , '42 500' , '45 000' , '47 500' , '50 000' , 'Plus de 50 000'  ],
'1':['0' , '250' , '500' , '750' , '1 000' , '1 250' , '1 500' , '2 000' , '2 500' , '3 000' , '3 500' , '4 000' , '5 000' , '7 500' , '10 000' , '12 500' , '15 000' , '17 500' , '20 000' , 'Plus de 20 000'  ],
'2':['0' , '25 000' , '50 000' , '75 000' , '100 000' , '125 000' , '150 000' , '175 000' , '200 000' , '225 000' , '250 000' , '275 000' , '300 000' , '325 000' , '350 000' , '400 000' , '450 000' , '500 000' , '550 000' , '600 000' , '650 000' , '700 000' , '800 000' , '900 000' , '1 000 000' , '1 100 000' , '1 200 000' , '1 300 000' , '1 400 000' , '1 500 000' , '2 000 000' , 'Plus de 2 000 000'  ],
'3':['0' , '500' , '1 000' , '2 000' , '3 000' , '4 000' , '5 000' , '6 000' , '7 000' , '8 000' , '9 000' , '10 000' , '15 000' , '20 000' , '30 000' , 'Plus de 30 000'  ],
'4':['0' , '5' , '10' , '20' , '30' , '40' , '50' , '75' , '100' , '200' , '300' , '400' , '500' , '1 000' , 'Plus de 1 000'  ],
'5':['0' , '100' , '500' , '1 000' , '2 500' , '5 000' , '7 500' , '10 000' , '30 000' , 'Plus de 30 000'  ],
'6':['0' , '50' , '100' , '150' , '200' , '250' , '300' , '350' , '400' , '450' , '500' , '550' , '600' , '650' , '700' , '750' , '800' , '850' , '900' , '950' , '1 000' , '1 100' , '1 200' , '1 300' , '1 400' , '1 500' , '2 000' , 'Plus de 2 000'  ],
'7':['0' , '500' , '1 000' , '5 000' , '10 000' , '30 000' , '50 000' , '100 000' , '250 000' , '500 000' , 'Plus de 500 000'  ],
'8':['0' , '10' , '20' , '30' , '40' , '50' , '75' , '100' , '200' , '300' , '400' , '500' , '1 000' , 'Plus de 1 000'  ],
'9':['0' , '5' , '10' , '20' , '30' , '40' , '50' , '75' , '100' , '250' , '500' , 'Plus de 500'  ],
'10':['0' , '10' , '20' , '30' , '40' , '50' , '60' , '70' , '80' , '90' , '100' , '125' , '150' , '175' , '200' , '300' , '400' , '500' , '1 000' , 'Plus de 1 000'  ],
'11':['0' , '5' , '10' , '20' , '30' , '40' , '50' , '75' , '100' , '200' , '300' , '400' , '500' , 'Plus de 500'  ],
'12':['0' , '5' , '10' , '15' , '20' , '25' , '30' , '50' , '75' , '100' , '150' , '200' , '300' , '500' , '1 000' , '2 500' , 'Plus de 2 500'  ],
'13':['0' , '3' , '5' , '8' , '10' , '15' , '20' , '25' , '30' , '40' , '50' , '100' , '250' , 'Plus de 250'  ],
'14':['0' , '5' , '10' , '15' , '30' , '50' , '75' , '100' , '200' , '300' , '400' , '500' , 'Plus de 500'  ],
'15':['0' , '3' , '5' , '8' , '10' , '15' , '20' , '30' , '50' , '75' , '100' , 'Plus de 100'  ],
'16':['0' , '5' , '10' , '15' , '20' , '30' , '50' , '75' , '100' , '200' , '300' , '400' , '500' , '1 000' , '2 500' , 'Plus de 2 500'  ],
'17':['0' , '15' , '50' , '100' , '200' , '300' , '400' , '500' , '750' , '1 000' , 'Plus de 1 000'  ],
'18':['0' , '5' , '10' , '15' , '20' , '30' , '50' , '75' , '100' , '250' , 'Plus de 250'  ],
'19':['0' , '15' , '30' , '50' , '75' , '100' , '250' , '500' , 'Plus de 500'  ],
'20':['0' , '5' , '10' , '15' , '20' , '25' , '30' , '50' , '75' , '100' , 'Plus de 100'  ],
'21':['0' , '10' , '25' , '50' , '75' , '100' , '200' , '300' , '400' , '500' , '750' , '1 000' , 'Plus de 1 000'  ],
'22':['0' , '250' , '500' , '750' , '1 000' , '1 500' , '2 000' , '2 500' , '3 000' , '4 000' , '5 000' , '6 000' , '7 000' , '8 000' , '9 000' , '10 000' , '11 000' , '12 000' , '13 000' , '14 000' , '15 000' , '17 500' , '20 000' , '22 500' , '25 000' , '27 500' , '30 000' , '35 000' , '40 000' , '45 000' , '50 000' , 'Plus de 50 000'  ],
'23':['0' , '100' , '200' , '250' , '300' , '350' , '400' , '450' , '500' , '600' , '700' , '800' , '900' , '1 000' , '1 200' , 'Plus de 1 200'  ],
'24':['0' , '100' , '150' , '200' , '250' , '300' , '350' , '400' , '450' , '500' , '550' , '600' , '700' , '800' , '900' , '1 000' , '1 200' , '1 600' , '2 000' , 'Plus de 2 000'  ],
'25':['0' , '5' , '10' , '20' , '30' , '40' , '50' , '75' , '100' , '150' , '200' , '250' , '500' , '1 000' , 'Plus de 1 000'  ],
'26':['0' , '5' , '10' , '20' , '30' , '40' , '50' , '75' , '100' , '200' , '300' , '400' , '500' , 'Plus de 500'  ],
'27':['0' , '5' , '10' , '15' , '20' , '30' , '40' , '50' , '75' , '100' , '250' , 'Plus de 250'  ],
'28':['0' , '5' , '10' , '15' , '20' , '30' , '50' , '75' , '100' , '250' , 'Plus de 250'  ],
'29':['0' , '5' , '10' , '15' , '20' , '25' , '30' , '40' , '50' , '75' , '100' , '250' , '500' , 'Plus de 500'  ],
'30':['0' , '5' , '10' , '15' , '20' , '30' , '40' , '50' , '75' , '100' , '200' , '300' , '400' , '500' , '1 000' , 'Plus de 1 000'  ],
'31':['0' , '3' , '5' , '8' , '10' , '15' , '20' , '30' , '50' , '75' , '100' , '250' , 'Plus de 250'  ],
'32':['0' , '3' , '5' , '8' , '10' , '15' , '20' , '30' , '50' , '75' , '100' , '250' , 'Plus de 250'  ],
'33':['0' , '15' , '30' , '50' , '75' , '100' , '150' , '200' , '300' , '400' , '500' , '750' , '1 000' , '2 500' , '5 000' , '10 000' , '15 000' , 'Plus de 15 000'  ],
'34':['0' , '5' , '10' , '15' , '20' , '30' , '40' , '50' , '75' , '100' , '250' , 'Plus de 250'  ],
'35':['0' , '5' , '10' , '15' , '20' , '30' , '40' , '50' , '75' , '100' , '250' , '500' , '1 000' , 'Plus de 1 000'  ],
'36':['0' , '100' , '500' , '1 000' , '2 500' , '5 000' , 'Plus de 5 000'  ],
'37':['0' , '5' , '10' , '15' , '20' , '25' , '30' , '40' , '50' , '75' , '100' , '250' , 'Plus de 250'  ],
'38':['0' , '5' , '10' , '15' , '20' , '30' , '40' , '50' , '75' , '100' , '200' , '250' , '500' , '750' , '1000' , '1250' , '1500' , 'Plus de 1500'  ]
};

var squareList = {
'0':['0' , '20' , '25' , '30' , '35' , '40' , '50' , '60' , '70' , '80' , '90' , '100' , '110' , '120' , '130' , '140' , '150' , '200' , '300' , '500' , 'Plus de 500'  ],
'1':['0' , '20' , '25' , '30' , '35' , '40' , '50' , '60' , '70' , '80' , '90' , '100' , '110' , '120' , '150' , '300' , 'Plus de 300'  ]
};

var regdateList = {
	'2':['1960' , '1961' , '1962' , '1963' , '1964' , '1965' , '1966' , '1967' , '1968' , '1969' , '1970' , '1971' , '1972' , '1973' , '1974' , '1975' , '1976' , '1977' , '1978' , '1979' , '1980' , '1981' , '1982' , '1983' , '1984' , '1985' , '1986' , '1987' , '1988' , '1989' , '1990' , '1991' , '1992' , '1993' , '1994' , '1995' , '1996' , '1997' , '1998' , '1999' , '2000' , '2001' , '2002' , '2003' , '2004' , '2005' , '2006' , '2007' , '2008' , '2009' , '2010' , '2011' , '2012'  ],
'3':['1960' , '1961' , '1962' , '1963' , '1964' , '1965' , '1966' , '1967' , '1968' , '1969' , '1970' , '1971' , '1972' , '1973' , '1974' , '1975' , '1976' , '1977' , '1978' , '1979' , '1980' , '1981' , '1982' , '1983' , '1984' , '1985' , '1986' , '1987' , '1988' , '1989' , '1990' , '1991' , '1992' , '1993' , '1994' , '1995' , '1996' , '1997' , '1998' , '1999' , '2000' , '2001' , '2002' , '2003' , '2004' , '2005' , '2006' , '2007' , '2008' , '2009' , '2010' , '2011' , '2012'  ],
'4':['1975' , '1976' , '1977' , '1978' , '1979' , '1980' , '1981' , '1982' , '1983' , '1984' , '1985' , '1986' , '1987' , '1988' , '1989' , '1990' , '1991' , '1992' , '1993' , '1994' , '1995' , '1996' , '1997' , '1998' , '1999' , '2000' , '2001' , '2002' , '2003' , '2004' , '2005' , '2006' , '2007' , '2008' , '2009' , '2010' , '2011' , '2012'  ],
'5':['1975' , '1976' , '1977' , '1978' , '1979' , '1980' , '1981' , '1982' , '1983' , '1984' , '1985' , '1986' , '1987' , '1988' , '1989' , '1990' , '1991' , '1992' , '1993' , '1994' , '1995' , '1996' , '1997' , '1998' , '1999' , '2000' , '2001' , '2002' , '2003' , '2004' , '2005' , '2006' , '2007' , '2008' , '2009' , '2010' , '2011' , '2012'  ]
};

var regdateListKey = {
	    '2':['1960' , '1961' , '1962' , '1963' , '1964' , '1965' , '1966' , '1967' , '1968' , '1969' , '1970' , '1971' , '1972' , '1973' , '1974' , '1975' , '1976' , '1977' , '1978' , '1979' , '1980' , '1981' , '1982' , '1983' , '1984' , '1985' , '1986' , '1987' , '1988' , '1989' , '1990' , '1991' , '1992' , '1993' , '1994' , '1995' , '1996' , '1997' , '1998' , '1999' , '2000' , '2001' , '2002' , '2003' , '2004' , '2005' , '2006' , '2007' , '2008' , '2009' , '2010' , '2011' , '2012'  ],
'3':['1960' , '1961' , '1962' , '1963' , '1964' , '1965' , '1966' , '1967' , '1968' , '1969' , '1970' , '1971' , '1972' , '1973' , '1974' , '1975' , '1976' , '1977' , '1978' , '1979' , '1980' , '1981' , '1982' , '1983' , '1984' , '1985' , '1986' , '1987' , '1988' , '1989' , '1990' , '1991' , '1992' , '1993' , '1994' , '1995' , '1996' , '1997' , '1998' , '1999' , '2000' , '2001' , '2002' , '2003' , '2004' , '2005' , '2006' , '2007' , '2008' , '2009' , '2010' , '2011' , '2012'  ],
'4':['1975' , '1976' , '1977' , '1978' , '1979' , '1980' , '1981' , '1982' , '1983' , '1984' , '1985' , '1986' , '1987' , '1988' , '1989' , '1990' , '1991' , '1992' , '1993' , '1994' , '1995' , '1996' , '1997' , '1998' , '1999' , '2000' , '2001' , '2002' , '2003' , '2004' , '2005' , '2006' , '2007' , '2008' , '2009' , '2010' , '2011' , '2012'  ],
'5':['1975' , '1976' , '1977' , '1978' , '1979' , '1980' , '1981' , '1982' , '1983' , '1984' , '1985' , '1986' , '1987' , '1988' , '1989' , '1990' , '1991' , '1992' , '1993' , '1994' , '1995' , '1996' , '1997' , '1998' , '1999' , '2000' , '2001' , '2002' , '2003' , '2004' , '2005' , '2006' , '2007' , '2008' , '2009' , '2010' , '2011' , '2012'  ]
};

var mileageList = {
	'0':['0' , '10 000' , '20 000' , '30 000' , '40 000' , '50 000' , '60 000' , '70 000' , '80 000' , '90 000' , '100 000' , '125 000' , '150 000' , '175 000' , '200 000' , '225 000' , '250 000' , 'Plus de 250 000'  ],
'1':['0' , '5 000' , '10 000' , '20 000' , '30 000' , '40 000' , '50 000' , '60 000' , '70 000' , '80 000' , '90 000' , '100 000' , '125 000' , '150 000' , '175 000' , '200 000' , '250 000' , 'Plus de 250 000'  ]
};


var mileageListKey = {
	    '0':['0' , '10000' , '20000' , '30000' , '40000' , '50000' , '60000' , '70000' , '80000' , '90000' , '100000' , '125000' , '150000' , '175000' , '200000' , '225000' , '250000' , '999999'  ],
'1':['0' , '5000' , '10000' , '20000' , '30000' , '40000' , '50000' , '60000' , '70000' , '80000' , '90000' , '100000' , '125000' , '150000' , '175000' , '200000' , '250000' , '999999'  ]
};

var typeList = {
'a':'Tous' ,
'b':'Echanges' ,
'h':'A louer' ,
'k':'Demandes' ,
's':'Offres' ,
'u':'Locations' 
};

var typeCpanel = {
'b':'Echanges' ,
'h':'Demandes' ,
'k':'Demandes' ,
's':'Offres' ,
'u':'Offres' 
};

var defaultTypes = {
'0':'s' ,
'1':'k' 
};

var default_max_extra_images = 2;
var default_price_extra_images = 0;

var categoryList = {
'1':{
	features:'',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'0',
	extra_images:'2',
	extra_images_price:'0'
},

'2':{
	features:'pricelist:0,regdatelist:2,mileagelist:0',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:"Pensez &agrave; pr&eacute;ciser la marque, le mod&egrave;le et le type (berline, coup&eacute;,...) du v&eacute;hicule."},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'3':{
	features:'pricelist:1,regdatelist:3,mileagelist:1',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:"Pensez &agrave; pr&eacute;ciser la marque et le mod&egrave;le de votre moto."},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'4':{
	features:'pricelist:22,regdatelist:4',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:"Pensez &agrave; pr&eacute;ciser la marque et le mod&egrave;le du v&eacute;hicule."},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'5':{
	features:'pricelist:3,regdatelist:5',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:"Pensez &agrave; pr&eacute;ciser la marque et le mod&egrave;le du v&eacute;hicule."},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'6':{
	features:'pricelist:4',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'44':{
	features:'pricelist:4',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'50':{
	features:'pricelist:21',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'7':{
	features:'pricelist:5',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'51':{
	features:'pricelist:36',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'8':{
	features:'',
	show_choices:'',
	def_type:'a',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,u,k,h',
	tips:{company:"", 'private':"", all:""},     
	level:'0',
	extra_images:'2',
	extra_images_price:'0'
},

'9':{
	features:'pricelist:2,fai_included,real_estate_type,squarelist:0,roomslist:0,ges,energy_rate,dpe_warn',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"Pensez &agrave; indiquer le montant de votre r&eacute;mun&eacute;ration TTC. Si celle-ci est comprise dans le prix affich&eacute;, indiquez « frais d'agence inclus ».", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'10':{
	features:'charges_included,real_estate_type,squarelist:1,roomslist:0,mrlist:0,ges,energy_rate,dpe_warn,furnished',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'u,h',
	tips:{company:"Pensez &agrave; indiquer le montant de votre r&eacute;mun&eacute;ration (ex: frais d'agence = 5% du loyer hors charges).", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'11':{
	features:'pricelist:23,ges,energy_rate,dpe_warn',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'u,h',
	tips:{company:"Pensez &agrave; indiquer le montant de votre r&eacute;mun&eacute;ration (ex: frais d'agence = 5% du loyer hors charges).", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'12':{
	features:'pricelist:24,capacitylist:0,ges,energy_rate,dpe_warn,ldv',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'u,h',
	tips:{company:"Pensez &agrave; indiquer le montant de votre r&eacute;mun&eacute;ration (ex: frais d'agence = 5% du loyer hors charges).", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'13':{
	features:'pricelist:7,fai_included,charges_included',
	show_choices:'1',
	def_type:'a',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,u,k',
	tips:{company:"Pensez &agrave; indiquer le montant de votre r&eacute;mun&eacute;ration TTC. Si celle-ci est comprise dans le prix affich&eacute;, indiquez « frais d'agence inclus ».", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'14':{
	features:'',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'0',
	extra_images:'2',
	extra_images_price:'0'
},

'15':{
	features:'pricelist:8,org_warning:0',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original."},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'43':{
	features:'pricelist:9,org_warning:0',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original."},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'16':{
	features:'pricelist:25,org_warning:0',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original."},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'17':{
	features:'pricelist:26,org_warning:0',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original."},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'18':{
	features:'',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'0',
	extra_images:'2',
	extra_images_price:'0'
},

'19':{
	features:'pricelist:10',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'20':{
	features:'pricelist:11',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'45':{
	features:'pricelist:27',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'39':{
	features:'pricelist:28',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'46':{
	features:'pricelist:28',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'21':{
	features:'pricelist:12',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'52':{
	features:'pricelist:12',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'22':{
	features:'pricelist:13,clothing_type,only_private',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original."},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'53':{
	features:'pricelist:13,shoe_type,shoe_size,only_private',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original."},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'47':{
	features:'pricelist:13',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original."},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'42':{
	features:'pricelist:14',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original."},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'23':{
	features:'pricelist:29',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'54':{
	features:'pricelist:13',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'24':{
	features:'',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'0',
	extra_images:'2',
	extra_images_price:'0'
},

'25':{
	features:'pricelist:15,org_warning:0',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original."},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'26':{
	features:'pricelist:15,org_warning:0',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original."},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'27':{
	features:'pricelist:15',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'28':{
	features:'pricelist:16',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"Pensez &agrave; mentionner l'&acirc;ge de l'animal, son immatriculation ou celle de sa m&egrave;re, son inscription ou non au LOF. Ne peuvent &ecirc;tre d&eacute;nomm&eacute;s comme chiens ou chats appartenant &agrave; une race que les animaux inscrits &agrave; un livre g&eacute;n&eacute;alogique. Seuls les chiens et les chats &acirc;g&eacute;s de plus de huit semaines peuvent faire l'objet d'une cession &agrave; titre on&eacute;reux. Tout animal qui est c&eacute;d&eacute; &agrave; titre gratuit ou on&eacute;reux doit &ecirc;tre tatou&eacute; et vaccin&eacute; : faire figurer les mentions tatou&eacute; et vaccin&eacute;. Est interdite la vente des chiens non inscrits au LOF de types Tosa, Mastiff, Boerbulls, Staffordshire Terrier, American Staffordshire Terrier et Pitbulls.", 'private':"Pensez &agrave; mentionner l'&acirc;ge de l'animal, son immatriculation ou celle de sa m&egrave;re, son inscription ou non au LOF, le nombre d'animaux de la port&eacute;e. Tout animal c&eacute;d&eacute; &agrave; titre gratuit ou on&eacute;reux doit &ecirc;tre tatou&eacute; et vaccin&eacute; : faire figurer les mentions tatou&eacute; et vaccin&eacute;. Est interdite la vente des chiens non inscrits au LOF de types Tosa, Mastiff, Boerbulls, Staffordshire Terrier, American Staffordshire Terrier et Pitbulls.", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'55':{
	features:'pricelist:38',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'29':{
	features:'pricelist:30',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'30':{
	features:'pricelist:17',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'40':{
	features:'pricelist:31',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'41':{
	features:'pricelist:32',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'48':{
	features:'pricelist:19,org_warning:0',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:"Nous vous rappelons que la vente de contrefa&ccedil;ons est interdite. Mentionnez bien dans votre annonce que votre produit est un original."},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'31':{
	features:'',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'0',
	extra_images:'2',
	extra_images_price:'0'
},

'32':{
	features:'pricelist:33',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'33':{
	features:'',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:"Pour &eacute;viter toute discrimination, merci de bien r&eacute;diger vos offres d'emploi au masculin et au f&eacute;minin ou indiquer que l'emploi est propos&eacute; aux candidats des deux sexes (H/F)."},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'34':{
	features:'',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"Pensez &agrave; indiquer les mentions l&eacute;gales (raison sociale, adresse, taux horaires, frais de d&eacute;placement,...)", 'private':"Pensez &agrave; indiquer le mode de r&egrave;glement : ch&egrave;que emploi service universel ou d&eacute;claration URSSAF.", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'35':{
	features:'pricelist:34',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'49':{
	features:'',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'36':{
	features:'pricelist:20',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"Pensez &agrave; indiquer le mode de r&egrave;glement par ch&egrave;que emploi service universel.", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
},

'37':{
	features:'',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'0',
	extra_images:'2',
	extra_images_price:'0'
},

'38':{
	features:'pricelist:35',
	show_choices:'',
	def_type:'',
	search_box:
	{
		
	},
	cat_warning:
	{
		
	},
	
	type:'s,k',
	tips:{company:"", 'private':"", all:""},     
	level:'1',
	extra_images:'2',
	extra_images_price:'0'
}

};

var org_warning = {

};

var region_warning = {

};

var address_warning = {

};

var zipcode_warning = {

};

var region_departments = Array();
region_departments[1] = Array(); 

        region_departments[1][67] = "Bas-Rhin"; 
region_departments[1][68] = "Haut-Rhin"; 

region_departments[2] = Array(); 

        region_departments[2][24] = "Dordogne"; 
region_departments[2][33] = "Gironde"; 
region_departments[2][40] = "Landes"; 
region_departments[2][47] = "Lot-et-Garonne"; 
region_departments[2][64] = "Pyrénées-Atlantiques"; 

region_departments[3] = Array(); 

        region_departments[3][3] = "Allier"; 
region_departments[3][15] = "Cantal"; 
region_departments[3][43] = "Haute-Loire"; 
region_departments[3][63] = "Puy-de-Dôme"; 

region_departments[4] = Array(); 

        region_departments[4][14] = "Calvados"; 
region_departments[4][50] = "Manche"; 
region_departments[4][61] = "Orne"; 

region_departments[5] = Array(); 

        region_departments[5][21] = "Côte-d'Or"; 
region_departments[5][58] = "Nièvre"; 
region_departments[5][71] = "Saône-et-Loire"; 
region_departments[5][89] = "Yonne"; 

region_departments[6] = Array(); 

        region_departments[6][22] = "Côtes-d'Armor"; 
region_departments[6][29] = "Finistère"; 
region_departments[6][35] = "Ille-et-Vilaine"; 
region_departments[6][56] = "Morbihan"; 

region_departments[7] = Array(); 

        region_departments[7][18] = "Cher"; 
region_departments[7][28] = "Eure-et-Loir"; 
region_departments[7][36] = "Indre"; 
region_departments[7][37] = "Indre-et-Loire"; 
region_departments[7][41] = "Loir-et-Cher"; 
region_departments[7][45] = "Loiret"; 

region_departments[8] = Array(); 

        region_departments[8][8] = "Ardennes"; 
region_departments[8][10] = "Aube"; 
region_departments[8][51] = "Marne"; 
region_departments[8][52] = "Haute-Marne"; 

region_departments[10] = Array(); 

        region_departments[10][25] = "Doubs"; 
region_departments[10][39] = "Jura"; 
region_departments[10][70] = "Haute-Saône"; 
region_departments[10][90] = "Territoire de Belfort"; 

region_departments[11] = Array(); 

        region_departments[11][27] = "Eure"; 
region_departments[11][76] = "Seine-Maritime"; 

region_departments[12] = Array(); 

        region_departments[12][75] = "Paris"; 
region_departments[12][77] = "Seine-et-Marne"; 
region_departments[12][78] = "Yvelines"; 
region_departments[12][91] = "Essonne"; 
region_departments[12][92] = "Hauts-de-Seine"; 
region_departments[12][93] = "Seine-Saint-Denis"; 
region_departments[12][94] = "Val-de-Marne"; 
region_departments[12][95] = "Val-d'Oise"; 

region_departments[13] = Array(); 

        region_departments[13][11] = "Aude"; 
region_departments[13][30] = "Gard"; 
region_departments[13][34] = "Hérault"; 
region_departments[13][48] = "Lozère"; 
region_departments[13][66] = "Pyrénées-Orientales"; 

region_departments[14] = Array(); 

        region_departments[14][19] = "Corrèze"; 
region_departments[14][23] = "Creuse"; 
region_departments[14][87] = "Haute-Vienne"; 

region_departments[15] = Array(); 

        region_departments[15][54] = "Meurthe-et-Moselle"; 
region_departments[15][55] = "Meuse"; 
region_departments[15][57] = "Moselle"; 
region_departments[15][88] = "Vosges"; 

region_departments[16] = Array(); 

        region_departments[16][9] = "Ariège"; 
region_departments[16][12] = "Aveyron"; 
region_departments[16][31] = "Haute-Garonne"; 
region_departments[16][32] = "Gers"; 
region_departments[16][46] = "Lot"; 
region_departments[16][65] = "Hautes-Pyrénées"; 
region_departments[16][81] = "Tarn"; 
region_departments[16][82] = "Tarn-et-Garonne"; 

region_departments[17] = Array(); 

        region_departments[17][59] = "Nord"; 
region_departments[17][62] = "Pas-de-Calais"; 

region_departments[18] = Array(); 

        region_departments[18][44] = "Loire-Atlantique"; 
region_departments[18][49] = "Maine-et-Loire"; 
region_departments[18][53] = "Mayenne"; 
region_departments[18][72] = "Sarthe"; 
region_departments[18][85] = "Vendée"; 

region_departments[19] = Array(); 

        region_departments[19][2] = "Aisne"; 
region_departments[19][60] = "Oise"; 
region_departments[19][80] = "Somme"; 

region_departments[20] = Array(); 

        region_departments[20][16] = "Charente"; 
region_departments[20][17] = "Charente-Maritime"; 
region_departments[20][79] = "Deux-Sèvres"; 
region_departments[20][86] = "Vienne"; 

region_departments[21] = Array(); 

        region_departments[21][4] = "Alpes-de-Haute-Provence"; 
region_departments[21][5] = "Hautes-Alpes"; 
region_departments[21][6] = "Alpes-Maritimes"; 
region_departments[21][13] = "Bouches-du-Rhône"; 
region_departments[21][83] = "Var"; 
region_departments[21][84] = "Vaucluse"; 

region_departments[22] = Array(); 

        region_departments[22][1] = "Ain"; 
region_departments[22][7] = "Ardèche"; 
region_departments[22][26] = "Drôme"; 
region_departments[22][38] = "Isère"; 
region_departments[22][42] = "Loire"; 
region_departments[22][69] = "Rhône"; 
region_departments[22][73] = "Savoie"; 
region_departments[22][74] = "Haute-Savoie"; 



var language_numbers = Array();
language_numbers[1] = 'un';
language_numbers[2] = 'deux';
language_numbers[3] = 'trois';
language_numbers[4] = 'quatre';
language_numbers[5] = 'cinq';


var features = {

'address':"Ville",
'animal_chips':"Pucé",
'availability':"Tarifs et disponibilités",
'bedrooms':"Nb de chambres",
'boat_type':"Type de bateau.",
'capacity':"Capacité",
'charges_included':"Charges comprises",
'city':"Ville",
'clothing_type':"Type",
'cubic_capacity':"Cylindrée",
'custom_ref':"Référence",
'dpe_warn':"",
'energy_rate':"Classe énergie",
'fai_included':"Frais d'agence inclus",
'fuel':"Carburant",
'furnished':"Meublé / Non meublé",
'gearbox':"Boîte de vitesse",
'ges':"GES",
'ldv':"ldv",
'mileage':"Kilométrage",
'monthly_rate':"Loyer mensuel",
'monthly_rent':"Loyer mensuel",
'periodic_fee':"Frais mensuels",
'price_max':"Prix Max",
'price_min':"Prix / semaine",
'profession':"Profession",
'real_estate_type':"Type de bien",
'refund':"",
'regdate':"Année-modèle",
'rooms':"Pièces",
'shoe_size':"Pointure",
'shoe_type':"Type",
'siren':"Siren",
'size':"Surface",
'square':"Surface",
'swimming_pool':"Piscine",
'tattooed_animal':"Tatoué",
'title':"Titre",
'vacation_rental':"Infos locations de vacances",
'vaccinated_animal':"Vacciné",
'vehicle_type':"Type de véhicule",
'weekly_rate':"Prix / semaine",
'zipcode':"Code postal"
};

var category_params = {
'1': {
	
},
'2': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez une voiture)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez une voiture)"
		}
	}
},
'3': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez une moto)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez une moto)"
		}
	}
},
'4': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez une caravane)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez une caravane)"
		}
	}
},
'5': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un utilitaire)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un utilitaire)"
		}
	}
},
'6': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un &eacute;quipement auto)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un &eacute;quipement auto)"
		}
	}
},
'7': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien nautique)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien nautique)"
		}
	}
},
'8': {
	
},
'9': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien immobilier)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien immobilier)"
		}
	}
},
'10': {
	'h': {
		'include':[''],
		'labels': {
			'cpanel':"Demandes",
			'newad':"Demande (vous recherchez un bien &agrave; louer)"
		}
	},
	'u': {
		'include':[''],
		'labels': {
			'cpanel':"Offres",
			'newad':"Offre (vous proposez un bien en location)"
		}
	}
},
'11': {
	'h': {
		'include':[''],
		'labels': {
			'cpanel':"Demandes",
			'newad':"Demande (vous cherchez une colocation)"
		}
	},
	'u': {
		'include':[''],
		'labels': {
			'cpanel':"Offres",
			'newad':"Offre (vous proposez un appartement en colocation)"
		}
	}
},
'12': {
	'h': {
		'include':[''],
		'labels': {
			'cpanel':"Demandes",
			'newad':"Demande (vous recherchez un bien &agrave; louer)"
		}
	},
	'u': {
		'include':[''],
		'labels': {
			'cpanel':"Offres",
			'newad':"Offre (vous proposez un bien en location)"
		}
	}
},
'13': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien &agrave; vendre ou &agrave; louer)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'cpanel':"Ventes",
			'iphone_search':"Ventes",
			'newad':"Vente (vous proposez un bien &agrave; vendre)",
			'type':"Ventes"
		}
	},
	'u': {
		'include':[''],
		'labels': {
			'cpanel':"Locations",
			'iphone_search':"Locations",
			'newad':"Location (vous proposez un bien &agrave; louer)"
		}
	}
},
'14': {
	
},
'15': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien informatique)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien informatique)"
		}
	}
},
'16': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'17': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'18': {
	
},
'19': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un meuble)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un meuble)"
		}
	}
},
'20': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez de l'&eacute;lectrom&eacute;nager)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez de l'&eacute;lectrom&eacute;nager)"
		}
	}
},
'21': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'22': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un v&ecirc;tement)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un v&ecirc;tement)"
		}
	}
},
'23': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez des objets pour b&eacute;b&eacute)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez des objets pour b&eacute;b&eacute;)"
		}
	}
},
'24': {
	
},
'25': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'26': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'27': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un livre)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un livre)"
		}
	}
},
'28': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous cherchez &agrave; acheter un animal)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un animal)"
		}
	}
},
'29': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'30': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'31': {
	
},
'32': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'33': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un emploi)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous proposez un poste &agrave; pourvoir)"
		}
	}
},
'34': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez une aide)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous proposez vos services)"
		}
	}
},
'35': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un billet)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous proposez un billet)"
		}
	}
},
'36': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un professeur de cours particuliers)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous proposez de donner des cours particuliers)"
		}
	}
},
'37': {
	
},
'38': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un objet)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous proposez un objet)"
		}
	}
},
'39': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un objet de d&eacute;coration)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un objet de d&eacute;coration)"
		}
	}
},
'40': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'41': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'42': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'43': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez une console ou un jeu vid&eacute;o)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez une console ou un jeu vid&eacute;o)"
		}
	}
},
'44': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un &eacute;quipement moto)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un &eacute;quipement moto)"
		}
	}
},
'45': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un objet d'art de la table)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un objet d'art de la table)"
		}
	}
},
'46': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez du linge de maison)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez du linge de maison)"
		}
	}
},
'47': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un accessoire ou un bagage)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un accessoire ou un bagage)"
		}
	}
},
'48': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'49': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un &eacute;v&eacute;nement)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous proposez un &eacute;v&eacute;nement)"
		}
	}
},
'50': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un &eacute;quipement caravaning)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un &eacute;quipement caravaning)"
		}
	}
},
'51': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un &eacute;quipement nautisme)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un &eacute;quipement nautisme)"
		}
	}
},
'52': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un bien)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un bien)"
		}
	}
},
'53': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez des chaussures)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez des chaussures)"
		}
	}
},
'54': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un v&ecirc;tement pour b&eacute;b&eacute;)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un v&ecirc;tement pour b&eacute;b&eacute;)"
		}
	}
},
'55': {
	'k': {
		'include':[''],
		'labels': {
			'newad':"Demande (vous recherchez un v&eacute;lo)"
		}
	},
	's': {
		'include':[''],
		'labels': {
			'newad':"Offre (vous vendez un v&eacute;lo)"
		}
	}
}
};

var colors = {
'1':'#0000ff' ,
'2':'#ff0000' ,
'3':'#00ff00' ,
'4':'#ffff00' ,
'5':'#9900FF' ,
'6':'#FF00CC' ,
'7':'#FFA300' ,
'8':'#00FFFF' ,
'9':'#A3A3A3' ,
'10':'#FFFFFF' ,
'11':'#FFA5A5' ,
'12':'#000000' 
};

var settings = { 'features' : {"1": {"1": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"2": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price,custom_ref"}},"s": {"0": {"value": "city,mileage:0,regdate:2,fuel,gearbox"},"1": {"value": "city,mileage:0,regdate:2,siren,fuel,gearbox,custom_ref"}}},"3": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,cubic_capacity,siren,no_price,custom_ref"}},"s": {"0": {"value": "city,mileage:1,cubic_capacity,regdate:3"},"1": {"value": "city,mileage:1,cubic_capacity,regdate:3,siren,custom_ref"}}},"4": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price,custom_ref"}},"s": {"0": {"value": "city,mileage:0,regdate:4"},"1": {"value": "city,siren,custom_ref,mileage:0,regdate:4"}}},"5": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price,custom_ref"}},"s": {"0": {"value": "city,mileage:0,regdate:5,fuel"},"1": {"value": "city,mileage:0,regdate:5,siren,fuel,custom_ref"}}},"6": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"7": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price,custom_ref"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren,custom_ref"}}},"8": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"9": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price,custom_ref"}},"s": {"0": {"value": "city,real_estate_type,square,rooms,ges,energy_rate,dpe_warn"},"1": {"value": "city,fai_included,real_estate_type,square,rooms,siren,custom_ref,ges,energy_rate,dpe_warn"}}},"10": {"h": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price,custom_ref"}},"u": {"0": {"value": "city,real_estate_type,square,rooms,monthly_rate,ges,energy_rate,dpe_warn,furnished"},"1": {"value": "city,charges_included,real_estate_type,square,rooms,monthly_rate,siren,custom_ref,ges,energy_rate,dpe_warn,furnished"}}},"11": {"h": {"0": {"value": "city,only_private,no_price"},"1": {"value": "city,only_private,no_price"}},"u": {"0": {"value": "city,only_private,square,rooms,monthly_rate,ges,energy_rate,dpe_warn"},"1": {"value": "city,only_private,square,rooms,monthly_rate,ges,energy_rate,dpe_warn"}}},"12": {"h": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price,custom_ref"}},"u": {"0": {"value": "city,capacity,weekly_rate,bedrooms,swimming_pool,price_min,price_max,availability,vacation_rental,no_price,ldv"},"1": {"value": "city,capacity,weekly_rate,siren,custom_ref,bedrooms,swimming_pool,price_min,price_max,availability,vacation_rental,no_price,ldv"}}},"13": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price,custom_ref"}},"s": {"0": {"value": "city,square,ges,energy_rate,dpe_warn"},"1": {"value": "city,fai_included,square,siren,custom_ref,ges,energy_rate,dpe_warn"}},"u": {"0": {"value": "city,square,ges,energy_rate,dpe_warn"},"1": {"value": "city,charges_included,square,siren,custom_ref,ges,energy_rate,dpe_warn"}}},"14": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"15": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"16": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"17": {"k": {"0": {"value": "city,only_private,no_price"},"1": {"value": "city,only_private,no_price"}},"s": {"0": {"value": "city,only_private"},"1": {"value": "city,only_private"}}},"18": {"k": {"0": {"value": "city,only_private,no_price"},"1": {"value": "city,only_private,no_price"}},"s": {"0": {"value": "city,only_private"},"1": {"value": "city,only_private"}}},"19": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"20": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"21": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"22": {"k": {"0": {"value": "city,only_private,no_price"},"1": {"value": "city,only_private,no_price"}},"s": {"0": {"value": "city,clothing_type,only_private"},"1": {"value": "city,clothing_type,only_private"}}},"23": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"24": {"k": {"0": {"value": "city,only_private,no_price"},"1": {"value": "city,only_private,no_price"}},"s": {"0": {"value": "city,only_private"},"1": {"value": "city,only_private"}}},"25": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"26": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"27": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"28": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city,tattooed_animal,vaccinated_animal,animal_chips"},"1": {"value": "city,tattooed_animal,vaccinated_animal,animal_chips,siren"}}},"29": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"30": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"31": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"32": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"33": {"k": {"0": {"value": "city,no_price,only_private"},"1": {"value": "city,no_price,only_private"}},"s": {"0": {"value": "city,only_company"},"1": {"value": "city,only_company,siren"}}},"34": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,no_price,siren"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"35": {"k": {"0": {"value": "city,only_private,no_price"},"1": {"value": "city,only_private,no_price"}},"s": {"0": {"value": "city,only_private"},"1": {"value": "city,only_private"}}},"36": {"k": {"0": {"value": "city,only_private,no_price"},"1": {"value": "city,only_private,no_price"}},"s": {"0": {"value": "city,only_private"},"1": {"value": "city,only_private"}}},"37": {"k": {"0": {"value": "city,only_private,no_price"},"1": {"value": "city,only_private,no_price"}},"s": {"0": {"value": "city,only_private"},"1": {"value": "city,only_private"}}},"38": {"k": {"0": {"value": "city,only_private,no_price"},"1": {"value": "city,only_private,no_price"}},"s": {"0": {"value": "city,only_private"},"1": {"value": "city,only_private"}}},"39": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"40": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"41": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"42": {"k": {"0": {"value": "city,only_private,no_price"},"1": {"value": "city,only_private,no_price"}},"s": {"0": {"value": "city,only_private"},"1": {"value": "city,only_private"}}},"43": {"k": {"0": {"value": "city,only_private,no_price"},"1": {"value": "city,only_private,no_price"}},"s": {"0": {"value": "city,only_private"},"1": {"value": "city,only_private"}}},"44": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"45": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"46": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"47": {"k": {"0": {"value": "city,only_private,no_price"},"1": {"value": "city,only_private,no_price"}},"s": {"0": {"value": "city,only_private"},"1": {"value": "city,only_private"}}},"48": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"49": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"50": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"51": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"52": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"53": {"k": {"0": {"value": "city,no_price,only_private"},"1": {"value": "city,siren,no_price,only_private"}},"s": {"0": {"value": "city,shoe_type,shoe_size,only_private"},"1": {"value": "city,siren,shoe_type,shoe_size,only_private"}}},"54": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"55": {"k": {"0": {"value": "city,no_price"},"1": {"value": "city,siren,no_price"}},"s": {"0": {"value": "city"},"1": {"value": "city,siren"}}},"keys": {"1": "category","2": "type","3": "company_ad"}},"separate_by_comma": "1"},
				 'search_box' : {"1": {"1": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"2": {"k": {"value": "zipcode"},"s": {"value": "mileagelist:0,regdatelist:2,pricelist:0,fuel,gearbox,zipcode"}},"3": {"k": {"value": "zipcode"},"s": {"value": "cubic_capacity,regdatelist:3,pricelist:1,zipcode,mileagelist:1"}},"4": {"k": {"value": "zipcode"},"s": {"value": "mileagelist:0,regdatelist:4,pricelist:22,zipcode"}},"5": {"k": {"value": "zipcode"},"s": {"value": "mileagelist:0,regdatelist:5,pricelist:3,fuel,zipcode"}},"6": {"k": {"value": "zipcode"},"s": {"value": "pricelist:4,zipcode"}},"7": {"k": {"value": "zipcode"},"s": {"value": "pricelist:5,zipcode"}},"8": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"9": {"k": {"value": "zipcode"},"s": {"value": "pricelist:2,squarelist:0,real_estate_type,rooms,zipcode"}},"10": {"k": {"value": "zipcode"},"s": {"value": "squarelist:1,real_estate_type,rooms,monthly_rate,zipcode,furnished"},"u": {"value": "squarelist:1,real_estate_type,rooms,monthly_rate,zipcode,furnished"}},"11": {"k": {"value": "zipcode"},"s": {"value": "pricelist:23,zipcode"},"u": {"value": "pricelist:23,zipcode"}},"12": {"k": {"value": "zipcode"},"s": {"value": "pricelist:24,availability,capacity,bedrooms,swimming_pool,zipcode"},"u": {"value": "pricelist:24,availability,capacity,bedrooms,swimming_pool,zipcode"}},"13": {"a": {"value": "pricelist:7,zipcode"},"k": {"value": "zipcode"},"s": {"value": "pricelist:7,zipcode"},"u": {"value": "pricelist:7,zipcode"}},"14": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"15": {"k": {"value": "zipcode"},"s": {"value": "pricelist:8,zipcode"}},"16": {"k": {"value": "zipcode"},"s": {"value": "pricelist:25,zipcode"}},"17": {"k": {"value": "zipcode"},"s": {"value": "pricelist:26,zipcode"}},"18": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"19": {"k": {"value": "zipcode"},"s": {"value": "pricelist:10,zipcode"}},"20": {"k": {"value": "zipcode"},"s": {"value": "pricelist:11,zipcode"}},"21": {"k": {"value": "zipcode"},"s": {"value": "pricelist:12,zipcode"}},"22": {"k": {"value": "zipcode"},"s": {"value": "clothing_type,pricelist:13,zipcode"}},"23": {"k": {"value": "zipcode"},"s": {"value": "pricelist:29,zipcode"}},"24": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"25": {"k": {"value": "zipcode"},"s": {"value": "pricelist:15,zipcode"}},"26": {"k": {"value": "zipcode"},"s": {"value": "pricelist:15,zipcode"}},"27": {"k": {"value": "zipcode"},"s": {"value": "pricelist:15,zipcode"}},"28": {"k": {"value": "zipcode"},"s": {"value": "pricelist:16,zipcode"}},"29": {"k": {"value": "zipcode"},"s": {"value": "pricelist:30,zipcode"}},"30": {"k": {"value": "zipcode"},"s": {"value": "pricelist:17,zipcode"}},"31": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"32": {"k": {"value": "zipcode"},"s": {"value": "pricelist:33,zipcode"}},"33": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"34": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"35": {"k": {"value": "zipcode"},"s": {"value": "pricelist:34,zipcode"}},"36": {"k": {"value": "zipcode"},"s": {"value": "pricelist:20,zipcode"}},"37": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"38": {"k": {"value": "zipcode"},"s": {"value": "pricelist:35,zipcode"}},"39": {"k": {"value": "zipcode"},"s": {"value": "pricelist:28,zipcode"}},"40": {"k": {"value": "zipcode"},"s": {"value": "pricelist:31,zipcode"}},"41": {"k": {"value": "zipcode"},"s": {"value": "pricelist:32,zipcode"}},"42": {"k": {"value": "zipcode"},"s": {"value": "pricelist:14,zipcode"}},"43": {"k": {"value": "zipcode"},"s": {"value": "pricelist:9,zipcode"}},"44": {"k": {"value": "zipcode"},"s": {"value": "pricelist:4,zipcode"}},"45": {"k": {"value": "zipcode"},"s": {"value": "pricelist:27,zipcode"}},"46": {"k": {"value": "zipcode"},"s": {"value": "pricelist:28,zipcode"}},"47": {"k": {"value": "zipcode"},"s": {"value": "pricelist:13,zipcode"}},"48": {"k": {"value": "zipcode"},"s": {"value": "pricelist:19,zipcode"}},"49": {"k": {"value": "zipcode"},"s": {"value": "zipcode"}},"50": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:21"}},"51": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:36"}},"52": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:12"}},"53": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:13,shoe_type,shoe_size"}},"54": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:13"}},"55": {"k": {"value": "zipcode"},"s": {"value": "zipcode,pricelist:38"}},"keys": {"1": "search_category","2": "search_type"}},"2": {"default": "zipcode"},"separate_by_comma": "1"},
				 'support' : {"1": {"3": {"value": "title,title_not_in_subject"},"keys": {"1": "subject"}},"separate_by_comma": "1"},
				 'store_settings' : {"1": {"2": {"1": {"value": "enabled:1,newad_price_with_tax:718,prolong_price_with_tax:718,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:1200,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1800,daily_bump30_with_tax:7900,photosup_with_tax:350,ldv_with_tax:9900"}},"3": {"1": {"value": "enabled:1,newad_price_with_tax:359,prolong_price_with_tax:359,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:1200,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1800,daily_bump30_with_tax:7900,photosup_with_tax:350,ldv_with_tax:9900"}},"4": {"1": {"value": "enabled:1,newad_price_with_tax:718,prolong_price_with_tax:718,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:1200,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1800,daily_bump30_with_tax:7900,photosup_with_tax:350,ldv_with_tax:9900"}},"5": {"1": {"value": "enabled:1,newad_price_with_tax:718,prolong_price_with_tax:718,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:1200,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1800,daily_bump30_with_tax:7900,photosup_with_tax:350,ldv_with_tax:9900"}},"6": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:600,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1200,daily_bump30_with_tax:4900,photosup_with_tax:350,ldv_with_tax:9900"}},"7": {"1": {"value": "enabled:1,newad_price_with_tax:359,prolong_price_with_tax:359,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:1200,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1800,daily_bump30_with_tax:7900,photosup_with_tax:350,ldv_with_tax:9900"}},"9": {"1": {"value": "enabled:1,newad_price_with_tax:957,prolong_price_with_tax:957,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:1200,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1800,daily_bump30_with_tax:7900,photosup_with_tax:350,ldv_with_tax:9900"}},"10": {"1": {"value": "enabled:1,newad_price_with_tax:957,prolong_price_with_tax:957,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:1200,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1800,daily_bump30_with_tax:7900,photosup_with_tax:350,ldv_with_tax:9900"}},"12": {"1": {"value": "enabled:1,newad_price_with_tax:957,prolong_price_with_tax:957,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:1200,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1800,daily_bump30_with_tax:7900,photosup_with_tax:350,ldv_with_tax:9900"}},"13": {"1": {"value": "enabled:1,newad_price_with_tax:957,prolong_price_with_tax:957,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:1200,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1800,daily_bump30_with_tax:7900,photosup_with_tax:350,ldv_with_tax:9900"}},"15": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:280,sub_toplist_with_tax:420,gallery_with_tax:700,top_list_with_tax:160,gallery30_with_tax:2100,daily_bump_with_tax:840,daily_bump30_with_tax:3430,photosup_with_tax:350,ldv_with_tax:9900"}},"16": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:600,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1200,daily_bump30_with_tax:4900,photosup_with_tax:350,ldv_with_tax:9900"}},"19": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:600,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1200,daily_bump30_with_tax:4900,photosup_with_tax:350,ldv_with_tax:9900"}},"20": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:280,sub_toplist_with_tax:420,gallery_with_tax:700,top_list_with_tax:160,gallery30_with_tax:2100,daily_bump_with_tax:840,daily_bump30_with_tax:3430,photosup_with_tax:350,ldv_with_tax:9900"}},"21": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:600,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1200,daily_bump30_with_tax:4900,photosup_with_tax:350,ldv_with_tax:9900"}},"23": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:280,sub_toplist_with_tax:420,gallery_with_tax:700,top_list_with_tax:160,gallery30_with_tax:2100,daily_bump_with_tax:840,daily_bump30_with_tax:3430,photosup_with_tax:350,ldv_with_tax:9900"}},"25": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:280,sub_toplist_with_tax:420,gallery_with_tax:700,top_list_with_tax:160,gallery30_with_tax:2100,daily_bump_with_tax:840,daily_bump30_with_tax:3430,photosup_with_tax:350,ldv_with_tax:9900"}},"26": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:280,sub_toplist_with_tax:420,gallery_with_tax:700,top_list_with_tax:160,gallery30_with_tax:2100,daily_bump_with_tax:840,daily_bump30_with_tax:3430,photosup_with_tax:350,ldv_with_tax:9900"}},"27": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:280,sub_toplist_with_tax:420,gallery_with_tax:700,top_list_with_tax:160,gallery30_with_tax:2100,daily_bump_with_tax:840,daily_bump30_with_tax:3430,photosup_with_tax:350,ldv_with_tax:9900"}},"28": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:600,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1200,daily_bump30_with_tax:4900,photosup_with_tax:350,ldv_with_tax:9900"}},"29": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:280,sub_toplist_with_tax:420,gallery_with_tax:700,top_list_with_tax:160,gallery30_with_tax:2100,daily_bump_with_tax:840,daily_bump30_with_tax:3430,photosup_with_tax:350,ldv_with_tax:9900"}},"30": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:600,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1200,daily_bump30_with_tax:4900,photosup_with_tax:350,ldv_with_tax:9900"}},"39": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:600,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1200,daily_bump30_with_tax:4900,photosup_with_tax:350,ldv_with_tax:9900"}},"40": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:600,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1200,daily_bump30_with_tax:4900,photosup_with_tax:350,ldv_with_tax:9900"}},"41": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:280,sub_toplist_with_tax:420,gallery_with_tax:700,top_list_with_tax:160,gallery30_with_tax:2100,daily_bump_with_tax:840,daily_bump30_with_tax:3430,photosup_with_tax:350,ldv_with_tax:9900"}},"44": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:600,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1200,daily_bump30_with_tax:4900,photosup_with_tax:350,ldv_with_tax:9900"}},"45": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:280,sub_toplist_with_tax:420,gallery_with_tax:700,top_list_with_tax:160,gallery30_with_tax:2100,daily_bump_with_tax:840,daily_bump30_with_tax:3430,photosup_with_tax:350,ldv_with_tax:9900"}},"46": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:280,sub_toplist_with_tax:420,gallery_with_tax:700,top_list_with_tax:160,gallery30_with_tax:2100,daily_bump_with_tax:840,daily_bump30_with_tax:3430,photosup_with_tax:350,ldv_with_tax:9900"}},"48": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:600,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1200,daily_bump30_with_tax:4900,photosup_with_tax:350,ldv_with_tax:9900"}},"50": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:600,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1200,daily_bump30_with_tax:4900,photosup_with_tax:350,ldv_with_tax:9900"}},"51": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:600,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1200,daily_bump30_with_tax:4900,photosup_with_tax:350,ldv_with_tax:9900"}},"52": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:600,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1200,daily_bump30_with_tax:4900,photosup_with_tax:350,ldv_with_tax:9900"}},"54": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:280,sub_toplist_with_tax:420,gallery_with_tax:700,top_list_with_tax:160,gallery30_with_tax:2100,daily_bump_with_tax:840,daily_bump30_with_tax:3430,photosup_with_tax:350,ldv_with_tax:9900"}},"55": {"1": {"value": "enabled:1,newad_price_with_tax:0,prolong_price_with_tax:0,edit_with_tax:200,urgent_with_tax:280,sub_toplist_with_tax:420,gallery_with_tax:700,top_list_with_tax:160,gallery30_with_tax:2100,daily_bump_with_tax:840,daily_bump30_with_tax:3430,photosup_with_tax:350,ldv_with_tax:9900"}},"keys": {"1": "category","2": "company_ad"}},"2": {"default": "enabled:0,newad_price_with_tax:957,prolong_price_with_tax:957,edit_with_tax:200,urgent_with_tax:400,sub_toplist_with_tax:600,gallery_with_tax:1000,top_list_with_tax:160,gallery30_with_tax:3000,daily_bump_with_tax:1200,daily_bump30_with_tax:4900,photosup_with_tax:350,ldv_with_tax:9900"},"must_create_account_msg": "Professionnels des cat&eacute;gories V&eacute;hicules, Immobilier, Multimedia, Maison et Loisirs, la cr&eacute;ation d'un Compte Pro est GRATUITE et obligatoire pour pouvoir d&eacute;poser vos annonces sur Leboncoin.fr.&nbsp;"},
				 'extra_images' : {"1": {"2": {"1": {"value": "max:4,photosup:5"}},"3": {"1": {"value": "max:4,photosup:5"}},"4": {"1": {"value": "max:4,photosup:5"}},"5": {"1": {"value": "max:4,photosup:5"}},"7": {"1": {"value": "max:4,photosup:5"}},"9": {"1": {"value": "max:4,photosup:5"}},"10": {"1": {"value": "max:4,photosup:5"}},"12": {"1": {"value": "max:4,photosup:5"}},"13": {"1": {"value": "max:4,photosup:5"}},"keys": {"1": "category","2": "company_ad"}},"2": {"default": "max:2,photosup:7"}}
	       };

var top_list_types = {
	'sms' : '1',
	'phone' : '2'
	/*,
	  '3' : 'card'*/
};

var edit_price_settings = {"1": {"keys": {"1": "category","2": "company_ad"}},"2": {"default": "price:200"}};
var gallery_price_settings = {"1": {"15": {"0": {"value": "price:700"},"1": {"value": "price:700"}},"17": {"0": {"value": "price:700"},"1": {"value": "price:700"}},"20": {"0": {"value": "price:700"},"1": {"value": "price:700"}},"22": {"0": {"value": "price:700"},"1": {"value": "price:700"}},"23": {"0": {"value": "price:700"},"1": {"value": "price:700"}},"25": {"0": {"value": "price:700"},"1": {"value": "price:700"}},"26": {"0": {"value": "price:700"},"1": {"value": "price:700"}},"27": {"0": {"value": "price:700"},"1": {"value": "price:700"}},"29": {"0": {"value": "price:700"},"1": {"value": "price:700"}},"35": {"0": {"value": "price:700"},"1": {"value": "price:700"}},"41": {"0": {"value": "price:700"},"1": {"value": "price:700"}},"42": {"0": {"value": "price:700"},"1": {"value": "price:700"}},"43": {"0": {"value": "price:700"},"1": {"value": "price:700"}},"45": {"0": {"value": "price:700"},"1": {"value": "price:700"}},"46": {"0": {"value": "price:700"},"1": {"value": "price:700"}},"47": {"0": {"value": "price:700"},"1": {"value": "price:700"}},"53": {"0": {"value": "price:700"},"1": {"value": "price:700"}},"54": {"0": {"value": "price:700"},"1": {"value": "price:700"}},"55": {"0": {"value": "price:700"},"1": {"value": "price:700"}},"keys": {"1": "category","2": "company_ad"}},"2": {"default": "price:1000"}};
var urgent_price_settings = {"1": {"15": {"0": {"value": "price:280"},"1": {"value": "price:280"}},"17": {"0": {"value": "price:280"},"1": {"value": "price:280"}},"20": {"0": {"value": "price:280"},"1": {"value": "price:280"}},"22": {"0": {"value": "price:280"},"1": {"value": "price:280"}},"23": {"0": {"value": "price:280"},"1": {"value": "price:280"}},"25": {"0": {"value": "price:280"},"1": {"value": "price:280"}},"26": {"0": {"value": "price:280"},"1": {"value": "price:280"}},"27": {"0": {"value": "price:280"},"1": {"value": "price:280"}},"29": {"0": {"value": "price:280"},"1": {"value": "price:280"}},"35": {"0": {"value": "price:280"},"1": {"value": "price:280"}},"41": {"0": {"value": "price:280"},"1": {"value": "price:280"}},"42": {"0": {"value": "price:280"},"1": {"value": "price:280"}},"43": {"0": {"value": "price:280"},"1": {"value": "price:280"}},"45": {"0": {"value": "price:280"},"1": {"value": "price:280"}},"46": {"0": {"value": "price:280"},"1": {"value": "price:280"}},"47": {"0": {"value": "price:280"},"1": {"value": "price:280"}},"53": {"0": {"value": "price:280"},"1": {"value": "price:280"}},"54": {"0": {"value": "price:280"},"1": {"value": "price:280"}},"55": {"0": {"value": "price:280"},"1": {"value": "price:280"}},"keys": {"1": "category","2": "company_ad"}},"2": {"default": "price:400"}};
var sub_toplist_price_settings = {"1": {"2": {"0": {"value": "price:1200"},"1": {"value": "price:1200"}},"3": {"0": {"value": "price:1200"},"1": {"value": "price:1200"}},"4": {"0": {"value": "price:1200"},"1": {"value": "price:1200"}},"5": {"0": {"value": "price:1200"},"1": {"value": "price:1200"}},"7": {"0": {"value": "price:1200"},"1": {"value": "price:1200"}},"9": {"0": {"value": "price:1200"},"1": {"value": "price:1200"}},"10": {"0": {"value": "price:1200"},"1": {"value": "price:1200"}},"11": {"0": {"value": "price:1200"},"1": {"value": "price:1200"}},"12": {"0": {"value": "price:1200"},"1": {"value": "price:1200"}},"13": {"0": {"value": "price:1200"},"1": {"value": "price:1200"}},"15": {"0": {"value": "price:420"},"1": {"value": "price:420"}},"17": {"0": {"value": "price:420"},"1": {"value": "price:420"}},"20": {"0": {"value": "price:420"},"1": {"value": "price:420"}},"22": {"0": {"value": "price:420"},"1": {"value": "price:420"}},"23": {"0": {"value": "price:420"},"1": {"value": "price:420"}},"25": {"0": {"value": "price:420"},"1": {"value": "price:420"}},"26": {"0": {"value": "price:420"},"1": {"value": "price:420"}},"27": {"0": {"value": "price:420"},"1": {"value": "price:420"}},"29": {"0": {"value": "price:420"},"1": {"value": "price:420"}},"32": {"0": {"value": "price:1200"},"1": {"value": "price:1200"}},"33": {"0": {"value": "price:1200"},"1": {"value": "price:1200"}},"34": {"0": {"value": "price:1200"},"1": {"value": "price:1200"}},"35": {"0": {"value": "price:420"},"1": {"value": "price:420"}},"36": {"0": {"value": "price:1200"},"1": {"value": "price:1200"}},"41": {"0": {"value": "price:420"},"1": {"value": "price:420"}},"42": {"0": {"value": "price:420"},"1": {"value": "price:420"}},"43": {"0": {"value": "price:420"},"1": {"value": "price:420"}},"45": {"0": {"value": "price:420"},"1": {"value": "price:420"}},"46": {"0": {"value": "price:420"},"1": {"value": "price:420"}},"47": {"0": {"value": "price:420"},"1": {"value": "price:420"}},"49": {"0": {"value": "price:1200"},"1": {"value": "price:1200"}},"51": {"0": {"value": "price:600"},"1": {"value": "price:600"}},"52": {"0": {"value": "price:600"},"1": {"value": "price:600"}},"53": {"0": {"value": "price:420"},"1": {"value": "price:420"}},"54": {"0": {"value": "price:420"},"1": {"value": "price:420"}},"55": {"0": {"value": "price:420"},"1": {"value": "price:420"}},"keys": {"1": "category","2": "company_ad"}},"2": {"default": "price:600"}};
var top_list_price_settings = {"1": {"keys": {"1": "category","2": "company_ad"}},"2": {"default": "price:160"}};

var max_watch_ads = 350;
var max_watch_ads_error_msg = "Vous avez atteint le maximum d'annonces que vous pouvez sauvegarder.<br/>Pour sauvegarder de nouvelles annonces, vous devez d'abord en supprimer de votre liste.";

var photosup_layout_pro = { 2 : true, 3 : true, 4 : true, 5 : true, 7 : true, 9 : true, 10 : true, 12 : true, 13 : true };


