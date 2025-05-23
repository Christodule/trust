/*import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({ title: '', category: '', content: '', image: '' });
  const [publishError, setPublishError] = useState(null);

  const navigate = useNavigate();

  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError('Please select an image');
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + '-' + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError('Image upload failed');
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData((prevData) => ({ ...prevData, image: downloadURL }));
          });
        }
      );
    } catch (error) {
      setImageUploadError('Image upload failed');
      setImageUploadProgress(null);
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPublishError(null);
  
    try {
      const token = localStorage.getItem("token"); // Récupérer le token du localStorage
  
      const res = await fetch("/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // Envoyer le token au backend
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
  
      navigate(`/post/${data.slug}`);
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };
  
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Create a Post</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
          <TextInput
            type='text'
            placeholder='Title'
            required
            className='flex-1'
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <Select
            required
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value=''>Choose a category</option>
            <option value='TrustEvent'>Event</option>
            <option value='TrustMedia'>Media</option>
            <option value='TrustBlog'>Blog</option>
          </Select>
        </div>


        {formData.category === 'TrustEvent' && (
          <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput
              type='date'
              required
              onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
              placeholder='Event Date'
            />
            <TextInput
              type='text'
              required
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder='Event Location'
            />
          </div>
        )}


        <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
          <FileInput type='file' accept='image/*' onChange={(e) => setFile(e.target.files[0])} />
          <Button
            type='button'
            gradientDuoTone='purpleToBlue'
            size='sm'
            outline
            onClick={handleUploadImage}
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <div className='w-16 h-16'>
                <CircularProgressbar value={imageUploadProgress} text={`${imageUploadProgress || 0}%`} />
              </div>
            ) : (
              'Upload Image'
            )}
          </Button>
        </div>

 
        {imageUploadError && <Alert color='failure'>{imageUploadError}</Alert>}
        {formData.image && <img src={formData.image} alt='upload' className='w-full h-72 object-cover' />}


        <ReactQuill
          theme='snow'
          placeholder='Write something...'
          className='h-72 mb-12'
          required
          onChange={(value) => setFormData({ ...formData, content: value })}
        />


        <Button type='submit' gradientDuoTone='purpleToPink'>
          Publish
        </Button>

   
        {publishError && <Alert className='mt-5' color='failure'>{publishError}</Alert>}
      </form>
    </div>
  );
}


  const handleSubmit = async (e) => {
    e.preventDefault();
    setPublishError(null);
  
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
  
      navigate(`/post/${data.slug}`);
    } catch (error) {
      setPublishError("Something went wrong");
    }
  }*/import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({ 
    title: '', 
    category: '', 
    subCategory: '',
    content: '', 
    image: '' 
  });
  const [publishError, setPublishError] = useState(null);

  const navigate = useNavigate();

  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError('Please select an image');
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + '-' + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError('Image upload failed');
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData((prevData) => ({ ...prevData, image: downloadURL }));
          });
        }
      );
    } catch (error) {
      setImageUploadError('Image upload failed');
      setImageUploadProgress(null);
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setPublishError(null);
  
    // Check if token exists
    const token = localStorage.setItem("token");
    if (!token) {
      setPublishError("Authentication failed. Please log in again.");
      return;
    }
  
    // Ensure subCategory has a default value if not selected
    if (!formData.subCategory) {
      setFormData((prevData) => ({ ...prevData, subCategory: "general" }));
    }
  
    try {
      const res = await fetch(`${API_URL}/api/post/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message || "Failed to publish the post.");
        return;
      }
  
      navigate(`/post/${data.slug}`);
    } catch (error) {
      setPublishError("Something went wrong. Please try again.");
    }
  };
  
  
  
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Create a Post</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      
        {/* Sélection de la catégorie principale */}
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
          <TextInput
            type='text'
            placeholder='Title'
            required
            className='flex-1'
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <Select
            required
            onChange={(e) => setFormData({ ...formData, category: e.target.value, subCategory: '' })}
          >
            <option value=''>Choose a category</option>
            <option value='TrustMedia'>Media</option>
            <option value='TrustEvent'>Event</option>
            <option value='TrustProduction'>Production</option>
          </Select>
        </div>

        {/* Sous-catégories pour Media */}
        {formData.category === 'TrustMedia' && (
          <Select
            required
            onChange={(e) => setFormData({ ...formData, subCategory: e.target.value })}
          >
            <option value=''>Choose a sub-category</option>
            <option value='news'>News</option>
            <option value='politique'>Politique</option>
            <option value='economie'>Économie</option>
            <option value='culture'>Culture</option>
            <option value='technologie'>technologie</option>
            <option value='sport'>Sport</option>
            <option value='portraits'>Portraits</option>
          </Select>
        )}

        {/* Champs supplémentaires pour Event */}
        {formData.category === 'TrustEvent' && (
          <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput
              type='date'
              required
              onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
              placeholder='Event Date'
            />
            <TextInput
              type='text'
              required
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder='Event Location'
            />
          </div>
        )}

        {/* Upload d'image */}
        <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
          <FileInput type='file' accept='image/*' onChange={(e) => setFile(e.target.files[0])} />
          <Button
            type='button'
            gradientDuoTone='purpleToBlue'
            size='sm'
            outline
            onClick={handleUploadImage}
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <div className='w-16 h-16'>
                <CircularProgressbar value={imageUploadProgress} text={`${imageUploadProgress || 0}%`} />
              </div>
            ) : (
              'Upload Image'
            )}
          </Button>
        </div>

        {imageUploadError && <Alert color='failure'>{imageUploadError}</Alert>}
        {formData.image && <img src={formData.image} alt='upload' className='w-full h-72 object-cover' />}

        {/* Éditeur de texte */}
        <ReactQuill
          theme='snow'
          placeholder='Write something...'
          className='h-72 mb-12'
          required
          onChange={(value) => setFormData({ ...formData, content: value })}
        />

        <Button type='submit' gradientDuoTone='purpleToPink'>
          Publish
        </Button>

        {publishError && <Alert className='mt-5' color='failure'>{publishError}</Alert>}
      </form>
    </div>
  );
}
