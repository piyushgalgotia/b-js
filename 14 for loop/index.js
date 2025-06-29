for( let i = 10; i>0 ;--i){
   // console.log(i);
}

for (let i = 1 ; i <=20 ; i++)
{
    if (i == 13 )
    {
      continue ; // its skip 13 and prints all other values 
    }
    console.log(i);
}

for (let i = 1 ; i <=20 ; i++)
{
    if (i == 13 )
    {
      break ; // its break the code when i == 13 and didnt print 13
    }
    console.log(i);
}