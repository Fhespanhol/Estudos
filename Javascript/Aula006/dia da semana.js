var agora= new Date()
var diaSem= agora.getDay()
/*
Para o sistema os dias da semana são contados assim:

0= domingo
1= segunda
2= terça
3= quarta
4= quinta
5= sexta
6= sábado

Então ao aplicar o comando acima o dia vai ser exibido na forma de um número. Para que esse número seja convertido em um dia da semana utilizamos uma condição múltipla ou switch case.
 */

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
        case 1:
            console.log('Segunda')
            break
            case 2:
                console.log('Terça')
                break
                case 3:
                    console.log('Quarta')
                    break
                    case 4:
                        console.log('Quinta')
                        break
                        case 5:
                            console.log('Sexta')
                            break
                            case 6:
                                console.log('Sábado')
                                break
                                default:
                                    console.log('Dia inválido')

}