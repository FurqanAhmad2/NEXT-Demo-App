import React, { useState, useEffect } from 'react';
import styles from './AdminPanelPage.module.css'; // Import CSS module

const AdminPanelPage: React.FC = () => {
    // State variables to store input data, posts, and the ID of the post being edited
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posts, setPosts] = useState([]);
    const [editPostId, setEditPostId] = useState('');

    

    // Function to handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            let endpoint = 'http://localhost:3001/api/data';
            let method = 'POST';
            if (editPostId) {
                // If editPostId is not empty, it means we're editing an existing post
                endpoint = `http://localhost:3001/api/posts/${editPostId}`;
                method = 'PUT';
            }
            const response = await fetch(endpoint, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, description })
            });
            if (response.ok) {
                console.log('Data stored successfully');
                setTitle('');
                setDescription('');
                setEditPostId(''); // Clear the editPostId after submission
                fetchPosts();
            } else {
                console.error('Failed to store data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Function to fetch all posts from the backend
    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/posts');
            if (response.ok) {
                const data = await response.json();
                setPosts(data.data);
            } else {
                console.error('Failed to fetch posts');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Function to delete a post
    const deletePost = async (id: string) => {
        try {
            const response = await fetch(`http://localhost:3001/api/posts/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                console.log('Post deleted successfully');
                fetchPosts();
            } else {
                console.error('Failed to delete post');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const editPost = async (id: string) => {
        try {
            const response = await fetch(`http://localhost:3001/api/posts/${id}`);
            if (response.ok) {
                const postData = await response.json();
                const { title, description } = postData.data;
                setTitle(title);
                setDescription(description);
                setEditPostId(id); // Set the ID of the post being edited
            } else {
                console.error('Failed to fetch post details');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Fetch posts on component mount
    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className={styles.adminContainer}>
            <div className={styles.adminCard}>
                <h1>Admin Panel</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.adminFormGroup}>
                        <label htmlFor="title" className={styles.adminFormLabel}>Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className={styles.adminFormInput}
                            required
                        />
                    </div>
                    <div className={styles.adminFormGroup}>
                        <label htmlFor="description" className={styles.adminFormLabel}>Description:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className={styles.adminFormTextarea}
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className={styles.adminFormButton}
                    >
                        {editPostId ? 'Update' : 'Submit'}
                    </button>
                </form>
            </div>
            
            <div className={styles.adminCard}>
                <h2>All Posts</h2>
                {posts.map((post: any) => (
                    <div key={post.id} className={styles.adminCard}>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <button onClick={() => deletePost(post.id)}>Delete</button>
                        <button onClick={() => editPost(post.id)}>Edit</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminPanelPage;
