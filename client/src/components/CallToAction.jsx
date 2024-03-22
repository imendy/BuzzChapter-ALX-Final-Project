// import { useState } from 'react';
// import { Button } from 'flowbite-react';
// import { Modal } from 'flowbite-react';

// export default function CallToAction() {
//   const [email, setEmail] = useState('');
//   const [showModal, setShowModal] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/newsletter/subscribe', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });
//       if (response.ok) {

//         setEmail('');
//         // Display success message or handle it appropriately
//         console.log('Subscribed successfully!');

//         setShowModal(true);
//       } else {
//         // Display error message or handle it appropriately
//         console.error('Failed to subscribe');
//       }
//     } catch (error) {
//       console.error('Error subscribing:', error);
//     }
//   };

//   return (
//     <div className='flex flex-col gap-4 sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
//         <div className="flex-1 justify-center flex flex-col">
       
//         <div className=" justify-center flex flex-col">
//             <h2 className='text-2xl font-semibold'>
//             Want to learn more about JavaScript?
//             </h2>
//             <p className='text-gray-500 my-2'>
//                 Checkout these resources with 100 JavaScript Projects
//             </p>
//             <Button gradientDuoTone='purpleToBlue' className='rounded-tl-xl rounded-bl-none'>
//                 <a href="https://www.100jsprojects.com" target='_blank' rel='noopener noreferrer'>
//                     100 JavaScript Projects
//                 </a>
//             </Button>
//         </div>
//          </div> 
      
//         <div className="flex-1 justify-center flex flex-col">
//             <h2 className='text-2xl font-semibold'>
//                 Subscribe to Our Newsletter
//             </h2>

//             <p className='text-gray-500 my-2'>
//                 Checkout these resources with 100 JavaScript Projects
//             </p>
//             <form onSubmit={handleSubmit} className="flex  items-center justify-center gap-2">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 w-full"
//               />
//               <button type="submit" className=" bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
//                 Subscribe
//               </button>
//             </form>


//             <Modal
//         show={showModal}
//         onClose={() => setShowModal(false)}
//         popup
       
//       >
//         <Modal.Header />
//         <Modal.Body>
//           <div className='text-center'>
//           <h2 className='text-xl font-semibold'>Thank You for Subscribing!</h2>
//       <p>You have successfully subscribed to our newsletter.</p>
//       <p>A confirmation email has been sent to your inbox.</p>
//             </div>

//             <Button color='gray' onClick={() => setShowModal(false)}>
//                close
//               </Button>
         
//         </Modal.Body>
//       </Modal>
//         </div>
//     </div>
//   );
// }



import { useState } from 'react';
import { Button } from 'flowbite-react';
import { Modal } from 'flowbite-react';
import { FaEnvelopeCircleCheck } from "react-icons/fa6";

export default function CallToAction() {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setEmail('');
        setShowModal(true);
      } else {
        const data = await response.json();
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='flex flex-col gap-4 sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className="flex-1 justify-center flex flex-col">
        <div className="justify-center flex flex-col">
          <h2 className='text-2xl font-semibold'>
            Want to learn more about JavaScript?
          </h2>
          <p className='text-gray-500 my-2'>
            Checkout these resources with 100 JavaScript Projects
          </p>
          <Button gradientDuoTone='purpleToBlue' className='rounded-tl-xl rounded-bl-none'>
            <a href="https://www.100jsprojects.com" target='_blank' rel='noopener noreferrer'>
              100 JavaScript Projects
            </a>
          </Button>
        </div>
      </div>

      <div className="flex-1 justify-center flex flex-col">
        <h2 className='text-2xl font-semibold'>
          Subscribe to Our Newsletter
        </h2>

        {errorMessage && (
          <div className="text-red-500">{errorMessage}</div>
        )}

        <p className='text-gray-500 my-2'>
          Checkout these resources with 100 JavaScript Projects
        </p>
        <form onSubmit={handleSubmit} className="flex  items-center justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 w-full"
          />
          <button
            type="submit"
            className=" bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className='text-center'>
            <FaEnvelopeCircleCheck text-xl text-cyan-600 font-semibold />
              <h2 className='text-xl font-semibold'>Thank You for Subscribing!</h2>
              <p>You have successfully subscribed to our newsletter.</p>
              <p className='mb-6 text-cyan-600 font-medium mt-2'>A confirmation email has been sent to your inbox.</p>
            </div>
            <Button color='gray' onClick={() => setShowModal(false)}>
              close
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

