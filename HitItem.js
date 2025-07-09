import { useEffect, useState } from 'react';
import data from '../assets/hit-items.json';
import Card from './Card';

const HitItem = ({onAddCart}) => {
  const [visibleCount,setVisibleCount] = useState(16);
  const [visibleItems,setVisibleItems] = useState([]);
  useEffect(()=>{
    const updateCount = ()=>{
      const width = window.innerWidth;  //vw
      if( width < 768 ){
        //모바일
        setVisibleCount(4);
      } else if(width < 1440){
        //테블릿
        setVisibleCount(6);
      } else {
        //데스트탑
        setVisibleCount(16);
      }
    }
    updateCount();
    window.addEventListener('resize',updateCount);
    return ()=>{
      window.removeEventListener('resize',updateCount);
    }
  },[]);
  useEffect(()=>{
    setVisibleItems(data.slice(0,visibleCount));
  },[visibleCount]);
  return (
    <div className="hit-item">
      {
        visibleItems.map((item)=>{
          return (
            <Card 
              key={item.id}
              item={item}
              isHover={false}
              onAdd={onAddCart}
            />
          )
        })
      }
    </div>
  );
};

export default HitItem;