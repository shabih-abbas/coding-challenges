#include <iostream>
#include <string>
#include <iomanip>
using namespace std;
	bool isNum(string input)
{
    char* p;
    strtol(input.c_str(), &p, 10);
    return *p == 0;
}
main(){
	
	string number, splice, words, ones[]={"","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE"}
	,teens[]={"TEN","ELEVEN","TWELVE","THIRTEEN","FOURTEEN","FIFTEEN","SIXTEEN","SEVENTEEN","EIGHTEEN","NINETEEN"}
	,tens[]={"","","TWENTY","THIRTY","FOURTY","FIFTY","SIXTY","SEVENTY","EIGHTY","NINTY"}
	,denom[]={"","THOUSAND","MILLION","BILLION"}, space[]={" ",""," HUNDRED"};
	int digitnum, segments, commas;
	do{
		words=splice="";
		cout<<"\nEnter a positive number for conversion.\nEnter a negative number to exit: ";
		cin>>number;
		if(!(isNum(number)))
			continue;
		if(number[0]=='-'){
			cout<<"\nThank you";
			return 0;
		}
		digitnum=number.length();
		commas=digitnum/3+(digitnum%3>0);
		for(segments=0;segments<commas;segments++){
			if (number[(digitnum-2)]=='1'){
				splice=teens[(int)number[(--digitnum)]-48];
				digitnum--;
			}
			else{
				splice=ones[(int)number[(--digitnum)]-48];	
				if(digitnum>0)
					splice=tens[(int)number[(--digitnum)]-48]+space[(splice=="")]+splice;
				}
			if(digitnum>0)
				splice=ones[(int)number[(--digitnum)]-48]+space[(number[digitnum-1]!='0')+1]+space[(splice=="")]+splice;
			if (splice!="")
				words=splice+space[(segments==0)]+denom[segments]+space[(words=="")]+words;
		}
		cout<<setfill('_')<<setw(words.length()+1)<<"\n"<<words<<"\n";
	}while(true);

}
	
	
	
	