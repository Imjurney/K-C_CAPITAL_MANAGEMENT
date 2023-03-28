import slide_1 from '../../../public/assets/img/investments/slide/slide_1.jpeg';
import slide_2 from '../../../public/assets/img/investments/slide/slide_2.jpeg';
import slide_3 from '../../../public/assets/img/investments/slide/slide_3.jpeg';

export const images: string[] = [slide_1, slide_2, slide_3];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
