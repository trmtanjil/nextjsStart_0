import React from 'react'

function servicesDetails({params}) {
    const data =[
  {
    id: '1',
    img: 'https://i.pravatar.cc/150?img=1',
    name: 'Ayaan Hasan'
  },
  {
    id: '2',
    img: 'https://i.pravatar.cc/150?img=2',
    name: 'Nadia Rahman'
  },
  {
    id: '3',
    img: 'https://i.pravatar.cc/150?img=3',
    name: 'Zihan Karim'
  },
  {
    id: '4',
    img: 'https://i.pravatar.cc/150?img=4',
    name: 'Tania Akter'
  },
  {
    id: '5',
    img: 'https://i.pravatar.cc/150?img=5',
    name: 'Rafiul Islam'
  },
  {
    id: '6',
    img: 'https://i.pravatar.cc/150?img=6',
    name: 'Maliha Chowdhury'
  },
  {
    id: '7',
    img: 'https://i.pravatar.cc/150?img=7',
    name: 'Hasanur Rahman'
  },
  {
    id: '8',
    img: 'https://i.pravatar.cc/150?img=8',
    name: 'Sumaiya Siddiqua'
  },
  {
    id: '9',
    img: 'https://i.pravatar.cc/150?img=9',
    name: 'Tawsif Hossain'
  },
  {
    id: '10',
    img: 'https://i.pravatar.cc/150?img=10',
    name: 'Lamisa Binte'
  }
];
    const id = params.id
   const singledata =   data.find((d)=> d.id == id) 
  return (
    <div>servicesDetails
        <p> 
      
           <p> {  singledata.name}</p>
           <img src={singledata.img} />
         
        </p>
    </div>
  )
}

export default servicesDetails