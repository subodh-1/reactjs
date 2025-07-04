import Directory from '../../components/directory/directory.component';

const Home = () => {

  const categories = [
    { 
      id: 1,
      title: 'Hats',
      imageURL: 'https://cdn.pixabay.com/photo/2021/11/05/12/25/woman-6771278_1280.jpg',
    },
    { 
      id: 2,
      title: 'Jackets',
      imageURL: 'https://cdn.pixabay.com/photo/2016/11/29/11/12/rain-1869119_1280.jpg',
    },
    { 
      id: 3,
      title: 'Sneakers',
      imageURL: 'https://cdn.pixabay.com/photo/2020/04/09/08/38/nike-5020361_1280.jpg',
    },
    { 
      id: 4,
      title: 'Men',
      imageURL: 'https://cdn.pixabay.com/photo/2019/09/04/13/41/couple-4451632_1280.jpg',
    },
    { 
      id: 5,
      title: 'Women',
      imageURL: 'https://cdn.pixabay.com/photo/2022/03/06/03/18/friends-7050708_1280.jpg',
    },
  ];
  return (
    <Directory categories={categories}/>
  );
}

export default Home;