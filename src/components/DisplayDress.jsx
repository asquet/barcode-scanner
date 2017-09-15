import React from 'react'

const data = [
  {
    imageSrc: "https://i.pinimg.com/736x/14/ff/d9/14ffd9087e82de640e38206fd5c11804.jpg",
    designerName: 'Naeem Khan',
    name: 'One shoulder sequin emroidered grown',
    status: 'Booked till 01/01/2018',
    stylist: 'Erin Walsh',
    client: 'Emma Watson',
    showroom: 'Showroom 1',
    recentEvents: [{ name: 'Cleaned', date: '4 days ago' }, {
      name: 'Rented',
      date: '6 day ago',
    }],
  },
  {
    imageSrc: "https://cdn.forevernew.com.au/media/catalog/product/cache/1/back_image/333x440/9df78eab33525d08d6e5fb8d27136e95/2/4/24806001.jpg",
    designerName: 'Erin Walsh',
    name: 'Very good looking',
    status: 'Booked till 01/01/2018',
    stylist: 'Naeem Khan',
    client: 'Emma Stone',
    showroom: 'Showroom 2',
    recentEvents: [{ name: 'Cleaned', date: '2 days ago' }, {
      name: 'Rented',
      date: '1 week ago',
    }],
  },
]

export const getData = code => data[code % 2]

export default function DisplayDress({
  code,
  imageSrc,
  designerName,
  name,
  status,
  stylist,
  client,
  showroom,
  recentEvents,
  onBack,
}) {

  return (
    <div>
      <img src={imageSrc} style={{ maxHeight: '300px', }} />
      <div style={{ textAlign: 'center' }}>
        <h5>{designerName}</h5>
        <p>{name}</p>
      </div>
      <div>
        {status}
      </div>
      <p>Code: {code}</p>
      <div className="dress-decription">
        <div>
          <p>Stylist</p>
          <p>{stylist}</p>
        </div>
        <div>
          <p>Client</p>
          <p>{client}</p>
        </div>
        <div>
          <p>Showroom</p>
          <p>{showroom}</p>
        </div>
      </div>
      <button onClick={onBack}> Back</button>
      <div>
        <p>Recently</p>
        <ul className="events-list">
          {
            recentEvents.map(ev => (
              <li key={ev.name}>
                <label>{ev.name}</label>
                <span>{ev.date}</span>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}