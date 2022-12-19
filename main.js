var n,a,c;
n=parseInt(prompt("Enter the NUmber"));
for(i=0;n>0;i++){
    a=n%10;
    document.write(a);
    n=n-a;
    n=n/10;
    
}