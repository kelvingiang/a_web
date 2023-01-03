export class ProductService {
  getProducts() {
    return [
      {
        id: 1,
        productName: 'Product One',
        releaseDate: 'May 1, 2015',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
        imgSrc: 'http://loremflickr.com/150/150?random=1',
        ratingNumber: 1,
        reviewNumber: 20,
      },
      {
        id: 2,
        productName: 'Product Two',
        releaseDate: 'Nov 25, 2011',
        description:
          'lorem(20) leo sed diam nonum et justo ut et dolor. Lorem ipsum dolor sit amet',
        imgSrc: 'http://loremflickr.com/150/150?random=2',
        ratingNumber: 3,
        reviewNumber: 70,
      },
      {
        id: 3,
        productName: 'Product Three',
        releaseDate: 'Jul 1, 2015',
        description:
          'lorem(10) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet',
        imgSrc: 'http://loremflickr.com/150/150?random=3',
        ratingNumber: 2,
        reviewNumber: 88,
      },
      {
        id: 4,
        productName: 'Product Four',
        releaseDate: 'Jun 23, 2022',
        description:
          'lorem ipsum dolor sit amet, consectetur adipiscing lorem, sed do eiusmod tempor incididunt ut labore',
        imgSrc: 'http://loremflickr.com/150/150?random=4',
        ratingNumber: 3,
        reviewNumber: 100,
      },
      {
        id: 5,
        productName: 'Product fIve',
        releaseDate: 'Feb 18, 2005',
        description:
          'lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit. Lorem ipsum dolor sit amet',
        imgSrc: 'http://loremflickr.com/150/150?random=5',
        ratingNumber: 4,
        reviewNumber: 200,
      },
    ];
  }
}
