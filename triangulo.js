var l1=0;
var l2=0;
var l3=0;

function c1()
{
    l1=parseInt(document.getElementById("lado1").value);
}
function c2()
{
    l2=parseInt(document.getElementById("lado2").value);
}
function c3()
{
    l3=parseInt(document.getElementById("lado3").value);
}
function calcularArea()
{
    var s=(l1+l2+l3)/2;
    var area=Math.sqrt(s*(s-l1)*(s-l2)*(s-l3));

    if(l1>=1 && l2>=1 && l3>=1)
    {
            document.getElementById("resultado").innerHTML="Area:" + area;
    }
    else
    {
        document.getElementById("resultado").innerHTML="Ingrese datos";
    }
}
function calcularPerimetro()
{
    var perimetro=l1+l2+l3;
    document.getElementById("resultado").innerHTML="Perímetro: " + perimetro;
    
}
function tipoT()
{
    if(l1==l2 & l1==l3 & l2==l3)
    {
        document.getElementById("resultado").innerHTML="Triángulo Equilatero";
    }
    else if(l1==l2 || l1==l3 || l2==l3)
    {
        document.getElementById("resultado").innerHTML=" Triángulo Escaleno";
    }
    else
    {
        document.getElementById("resultado").innerHTML="Triángulo isosceles";
    }
}