import React, { useState } from 'react';
import Navbar from '../Bar/Navbar';

function Post(props) {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const [imageDescription, setImageDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Envoyer l'image, le nom et la description au serveur

    // Réinitialiser le formulaire
    setImage(null);
    setImageName('');
    setImageDescription('');
  };

  return (
    <div>
      <Navbar />    
      <div className="photo-upload-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom de la photo :</label>
            <input type="text" id="name" value={imageName} onChange={(e) => setImageName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description :</label>
            <textarea id="description" value={imageDescription} onChange={(e) => setImageDescription(e.target.value)}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="image">Choisissez une photo :</label>
            <input type="file" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
          </div>
          <button type="submit">Publier</button>
        </form>
      </div>
    </div>
  );
}

export default Post;
