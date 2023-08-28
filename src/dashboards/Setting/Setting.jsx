
// import { useState } from 'react';
// import { baseUrl } from './../../baseurl/baseUrl';
// const Setting = () => {
//     const [selectedImage, setSelectedImage] = useState(null);

//     const handleImageChange = (event) => {
//         setSelectedImage(event.target.files[0]);
//     };

//     const handleUpload = () => {
//         const formData = new FormData();
//         formData.append('image', selectedImage);

//         fetch(`${baseUrl}/upload`, {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//             },
//             body: JSON.stringify(formData)
//         }).then(res => res.json()).then(data => {
//             console.log(data);

//         })

//         // try {
//         //     const response = await fetch(`${baseUrl}/upload`, {
//         //         method: 'POST',
//         //         body: formData,
//         //     });
//         //     console.log(response);
//         // } catch (error) {
//         //     console.error('Error uploading image:', error);
//         // }
//     };

//     return (
//         <div className='content-wrapper'>
//             <div className='content-header'>
//                 <div>
//                     <input type="file" accept="image/*" onChange={handleImageChange} />
//                     <button onClick={handleUpload}>Upload</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Setting;

import { useState } from 'react';
import { baseUrl } from './../../baseurl/baseUrl';

const Setting = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
    };

    const handleUpload = () => {
        if (selectedImage) {
            const formData = new FormData();
            formData.append('image', selectedImage);

            fetch(`${baseUrl}/upload`, {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data.imageUrl );
                    // Handle success or any additional actions
                })
                .catch(error => {
                    console.error('Error uploading image:', error);
                });
        } else {
            console.error('No image selected');

        }
    };
    return (
        <div className='content-wrapper'>
            <div className='content-header'>
                <div>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    <button onClick={handleUpload}>Upload</button>
                </div>
            </div>
        </div>
    );
};

export default Setting;
