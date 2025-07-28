import React from 'react';
import { Github } from 'lucide-react';
import Tile from './Tile';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Multi Agentic AI System',
      description: 'Developed a Python RESTful API for a multi-agent conversational AI system with RAG and a custom CRM. The platform enables chat with multiple AI agents, handles document uploads in various formats, and offers real-time user info extraction, session and analytics management, and conversation history retrieval. A user-friendly frontend was also built, enabling flexible, scalable, and enterprise-ready interactions.',
      image: 'images/HProject.png',
      category: 'AI/ML',
      technologies: ['SQLite', 'ChromaDB', 'Python', 'JavaScript', 'FastAPI', 'RAG'],
      stars: 1892,
      forks: 312,
      links: {
        github: 'https://github.com/Venkatalakshmikottapalli/multi-agentic-conversation-ai-system',
        demo: '#',
        docs: '#'
      },
      status: 'Active',
      featured: true
    },
    {
      title: 'Dynamic Ad Recommender Chatbot',
      description: 'Python chatbot utilizing single-shot learning and prompt engineering with GPT-4o-mini to track chat context, assess topic coherence, and recommend products via SerpApi. Integrates seamless, real-time recommendations and thread-safe design.',
      image: 'images/project1.png',
      category: 'AI/ML',
      technologies: ['Python', 'OpenAI API', 'SerpApi', 'Prompt Engineering'],
      stars: 1567,
      forks: 234,
      links: {
        github: 'https://github.com/VaibhavChemboli116/Dynamic_Ad_Recommender_Chatbot',
        demo: '#',
        docs: '#'
      },
      status: 'Active',
      featured: true
    },
    {
      title: 'Low-Rank Fine-Tuning of TinyLLaMA and Phi-2 for Persona-Driven Causal Language Modeling',
      description: 'Developed a lightweight Tony Stark chatbot by fine-tuning TinyLLaMA and Phi-2 models using LoRA and 4-bit quantization. Leveraged Marvel script data to train for persona-driven, context-aware dialogue, optimizing for efficient deployment on limited hardware.',
      image: 'images/project2.png',
      category: 'AI/ML',
      technologies: ['Python', 'LoRA', 'Quantization', 'Hugging Face'],
      stars: 1245,
      forks: 89,
      links: {
        github: 'https://github.com/VaibhavChemboli116/LoRA_TonyStark',
        demo: '#',
        docs: '#'
      },
      status: 'Active',
      featured: true
    },
    {
      title: 'Diffusion-Driven Image Generation on 160-Class Multi-Modal Medical Images',
      description: 'Trained a Diffusion Model (DDPM) on a custom 14 GB multi-modal medical dataset spanning over 160 disease classes. Prepared data in COCO format, enabling efficient image-label pairing. Achieved robust image generation and representation across diverse medical conditions.',
      image: 'images/Project3.png',
      category: 'AI/ML',
      technologies: ['Diffusion Models', 'Generative AI', 'Medical Imaging', 'PyTorch'],
      stars: 892,
      forks: 156,
      links: {
        github: 'https://github.com/VaibhavChemboli116/Med_Diffusion',
        docs: '#'
      },
      status: 'Active',
      featured: true
    },
    {
      title: 'House Price Prediction',
      description: 'Diligently developed a house price prediction model using the Kaggle dataset, applying meticulous handling of missing values (NAs). Leveraged advanced feature engineering, scaling, and dimensionality reduction for precise property value regression analysis.',
      image: 'images/Project4.jpg',
      category: 'AI/ML',
      technologies: ['pandas', 'numpy', 'matplotlib', 'seaborn', 'scikit-learn', 'xgboost'],
      stars: 567,
      forks: 78,
      links: {
        github: 'https://github.com/VaibhavChemboli116/House_Price_Prediction',
        demo: '#',
        live: '#'
      },
      status: 'Active',
      featured: false
    },
    {
      title: 'Canine Cardiomegaly Classification & Key Point Localization for Vertebral Heart Score Prediction in Dogs',
      description: 'Developed advanced deep learning models for canine cardiomegaly detection and VHS prediction from X-rays. A custom CNN-BiLSTM model delivered performance comparable to the pre-trained VGG16, while the HRNet-W32-based regressor for VHS prediction exceeded VGG16\'s results by accurately localizing anatomical keypoints.',
      image: 'images/Project5.png',
      category: 'AI/ML',
      technologies: ['PyTorch', 'CV', 'Medical Imaging'],
      stars: 334,
      forks: 45,
      links: {
        github: 'https://github.com/VaibhavChemboli116/Canine_Cardiomegaly_Classification_And_VHS_Regression',
        demo: '#'
      },
      status: 'Maintenance',
      featured: false
    },
    {
      title: 'Noise Isolation in Bird Sound Images Using Atrous Convolutions with Multi-Scale Contextual Learning',
      description: 'Designed AtrousSegNet, a custom encoder-decoder CNN using atrous convolutions and multi-scale contextual learning, to segment noise regions in bird sound spectrogram images. The model performed competitively with leading approaches like DeepLabV3, effectively isolating noise while remaining computationally efficient.',
      image: 'images/Project6.png',
      category: 'AI/ML',
      technologies: ['PyTorch', 'CV', 'Segmentation'],
      stars: 445,
      forks: 67,
      links: {
        github: 'https://github.com/VaibhavChemboli116/Noise_Isolation_Bird_Sound_Images',
        demo: '#',
        whitepaper: '#'
      },
      status: 'Complete',
      featured: false
    },
    {
      title: 'Explainable AI for Retinal Disease Detection',
      description: 'This project compares deep learning models for retinal disease detection from OCT scans. A custom CNN and a pretrained DenseNet121 were trained to classify eight retinal conditions, with DenseNet121 outperforming the custom model. Grad-CAM visualizations provided insight into model decision-making for greater explainability.',
      image: 'images/Project7.png',
      category: 'AI/ML',
      technologies: ['PyTorch', 'Grad-CAM', 'OCT Medical Imaging'],
      stars: 289,
      forks: 32,
      links: {
        github: 'https://github.com/VaibhavChemboli116/Retinal_Disease_Classification',
        demo: '#'
      },
      status: 'Active',
      featured: false
    },
    {
      title: 'Custom Implementation of K-Means Clustering Algorithm',
      description: 'Converted a rainbow image into a pixel dataset with coordinates and RGB values. Cleaned and visualized the data, then clustered pixels using both scikit-learn and a custom KMeans algorithm built from scratch to reveal patterns and reduce noise in the image.',
      image: 'images/Project8.png',
      category: 'AI/ML',
      technologies: ['Unsupervised Learning ', 'scikit-learn', 'PyTorch', 'Clustering', 'Data Analysis'],
      stars: 234,
      forks: 28,
      links: {
        github: 'https://github.com/VaibhavChemboli116/Custom_KMeans_Clustering',
        demo: '#'
      },
      status: 'Active',
      featured: false
    },
    {
      title: 'Targeted Marketing',
      description: 'Analyzed SMARTMARKET\'s rotational campaign system using a dataset of 260k records. Developed a neural network achieving 90% accuracy across train, test, and validation sets, and leveraged model predictions to select the top 25% of subscribers, boosting campaign response rates by 65%. The deployed model assigns optimal campaigns to users, maximizing engagement and increasing response rates.',
      image: 'images/Project9.png',
      category: 'AI/ML',
      technologies: ['Campaign Optimization', 'Marketing Analytics', 'DL'],
      stars: 189,
      forks: 34,
      links: {
        github: 'https://github.com/VaibhavChemboli116/Targeted_Marketing/tree/main',
        demo: '#'
      },
      status: 'Active',
      featured: false
    },
    {
      title: 'Understanding Mental Health Through Socioeconomic-Demographic, Lifestyle and Health Factors: An NHANES Perspective',
      description: 'This project explores how lifestyle, health, socioeconomic, and demographic factors relate to mental health using NHANES data. Descriptive statistics and generalized linear models reveal key associations by age and gender, informing public health policy and well-being initiatives.',
      image: 'images/Project10.png',
      category: 'AI/ML',
      technologies: ['R', 'Data Analysis'],
      stars: 156,
      forks: 22,
      links: {
        github: 'https://github.com/VaibhavChemboli116/Mental-Health-NHANES-Study',
        docs: '#'
      },
      status: 'Active',
      featured: false
    },
    {
      title: 'Crop Type Prediction using Supervised, Unsupervised Learning, and Neural Networks',
      description: 'This project applies machine learning and deep learning to predict crop types from soil and environmental features, supporting agricultural decision-making. A variety of supervised, unsupervised, and neural network models were trained and fine-tuned using the Kaggle Soil Measures Dataset, providing insights into model performance and interpretability for crop classification.',
      image: 'images/Project11.png',
      category: 'Full-Stack',
      technologies: ['sklearn', 'TensorFlow', 'Keras'],
      stars: 298,
      forks: 45,
      links: {
        github: 'https://github.com/VaibhavChemboli116/Crop_Type_Prediction',
        demo: '#'
      },
      status: 'Active',
      featured: false
    },
    {
      title: 'Time Series Air Quality Prediction with Neural Networks',
      description: 'Developed neural networks for time series air quality prediction using the UCI Air Quality dataset. Achieved 92.6% test accuracy for CO threshold classification and built a regression model for NOx estimation (test RMSE: 58.5, MAE: 38.5). Used TensorFlow and advanced preprocessing.',
      image: 'images/Project12.png',
      category: 'Backend',
      technologies: ['TensorFlow', 'Python'],
      stars: 167,
      forks: 31,
      links: {
        github: 'https://github.com/VaibhavChemboli116/Times_Series_Air_Quality_Prediction',
        docs: '#'
      },
      status: 'Active',
      featured: false
    },
    {
      title: 'Wireless Sound Control',
      description: 'Implements a real-time hand gesture-based system to control computer volume wirelessly using a webcam. Utilizes OpenCV, MediaPipe, and pycaw to detect hand landmarks and adjust audio levels based on finger positions, enabling intuitive, touch-free sound control.',
      image: 'images/Project13.png',
      category: 'AI/ML',
      technologies: ['Gesture Control', 'Computer Vision', 'Python'],
      stars: 145,
      forks: 19,
      links: {
        github: 'https://github.com/VaibhavChemboli116/Wireless_Sound_Control',
        demo: '#'
      },
      status: 'Complete',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built, rebuilt, and sometimes unbuilt, because progress isn't always linear.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Tile key={index} className="mb-8">
              <div className="project-tile-container">
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed flex-grow text-sm text-justify">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-md text-gray-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Tile>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/VaibhavChemboli116?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;