import "./Listitem.css"
const List=[{
    id: '1',
    name:"Natnael Desalegn"
},
{
    id: '2',
    name:"Natnael Fisseha"
},{
    id: '3',
    name:"Natnael Worku"
},
{
    id: '4',
    name:"Nebat Hussen"
},{
    id: '5',
    name:"Nebiyat Takele"
},
{
    id: '6',
    name:"Tsion Samuel"
},{
    id: '7',
    name:"Yeabsera Abebe"
},
{
    id: '8',
    name:"Yeabsira Mekonnen"
},{
    id: '9',
    name:"Yegeta Taye"
},
{
    id: '10',
    name:"Yohanna Betsiha "
},
];
const  Listi =()=>(
    <table>
        
         <caption><h1>list of  gdsc react group 6  students</h1></caption>
        <tr> <th class="list">ID</th> <th class="list">Name</th></tr>
        { List.map(item=>(
            <tr  key= { item.id}>
                <td class="list">{item.id}</td>
                <td  class="list">{item.name}</td>
            </tr>
        ))}
    </table>
)
export default Listi;


