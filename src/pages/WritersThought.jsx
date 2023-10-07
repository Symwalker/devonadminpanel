import React, { useEffect, useState } from 'react'
import Accordion from '../components/Accordian/acc';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllArticless } from '../store/products';
import Loaderr from '../components/Loader/loader';
import { useLocation } from 'react-router-dom';

// import imagePlaceholder from "../images/banner Thea.png"

const WritersThought = () => {

    const { articles , status} = useSelector((state) => state.products)
    
    
    // console.log(articles[0].Created_on);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllArticless())
    }, [])

    // const accordionData = [
    //     { title: "I double-dog dare you to turn the Beatles' most nonsensical song into a cohesive story", content: "Content for Accordion 1  lasnlan lorem23 dknsklanlasn Content for Accordion 1  lasnlan lorem23 dknsklanlasnContent for Accordion 1  lasnlan lorem23 dknsklanlasnContent for Accordiosnlan lorem23 dknsklanlasn Content for Accordion 1  lasnlan lorem23 dknsklanlasnContent for Accordion 1  lasnlan lorem23 dknsklanlaslanlasn" }
    // ];

    // const [accordions, setAccordions] = useState(articles.map(() => false));
    // console.log(accordions);
//     const storedAccordions = JSON.parse(localStorage.getItem('accordions'));
//     const initialAccordions = storedAccordions || Array.from({ length: articles.length }, () => false);
  
//     const [accordions, setAccordions] = useState(initialAccordions);
//   console.log(accordions);
//     // Save the state to localStorage whenever it changes
//     useEffect(() => {
//       localStorage.setItem('accordions', JSON.stringify(accordions));
//     }, [accordions]);
    
const storedAccordions = JSON.parse(localStorage.getItem('accordions'));
const initialAccordions = storedAccordions || Array.from({ length: articles.length }, () => false);

// Use useState to manage the accordions state
const [accordions, setAccordions] = useState(initialAccordions);

// Function to toggle the state of a specific accordion
const toggleAccordion = (index) => {
  const newAccordions = [...accordions];
  newAccordions[index] = !newAccordions[index];
  setAccordions(newAccordions);
};

// Save the state to localStorage whenever it changes
useEffect(() => {
  localStorage.setItem('accordions', JSON.stringify(accordions));
}, [accordions]);

    //   console.log(accordions);
    // const handleAccordionToggle = (index) => { 
    //     const newAccordions = accordions.map((value, i) => (i === index ? !value : false));
    //     setAccordions(newAccordions);
    // };
    return (
        <>
        {status === "loading" ? <Loaderr/> : <div className='mb-28 mt-20'>
            {articles.map((accordion, index) => {
            const date = accordion.Created_on;
            const datePart = date.split("T");
            // console.log(datePart[0]);
                return <Accordion
                    key={index}
                    // image={accordion.image}
                    title={accordion.title}
                    date={datePart[0]}
                    content={accordion.Description}
                    expanded={accordions[index]}
                    onToggle={() => toggleAccordion(index)}
                    id={accordion._id}
                />
            })}
         
        </div>
     
        }
        
        </>
        

    )
}

export default WritersThought