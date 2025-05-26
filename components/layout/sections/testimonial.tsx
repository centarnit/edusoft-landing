'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Star } from 'lucide-react';

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: '/logo-minimized.png',
    name: 'Elena Petrović',
    userName: 'School Principal',
    comment:
      'Edusoft has completely transformed how we track student progress and manage tuition payments. Our staff and parents love the transparency!',
    rating: 5.0,
  },
  {
    image: '/logo-minimized.png',
    name: 'Marko Jovanović',
    userName: 'Finance Administrator',
    comment:
      'With Edusoft, I can instantly see which students are behind on payments and generate reports for our board meetings in seconds.',
    rating: 4.9,
  },
  {
    image: '/logo-minimized.png',
    name: 'Ivana Kovačević',
    userName: 'Parent',
    comment:
      'I always know my child’s academic status and payment history. Edusoft makes communication with the school so much easier!',
    rating: 5.0,
  },
  {
    image: '/logo-minimized.png',
    name: 'Stefan Ilić',
    userName: 'IT Coordinator',
    comment:
      'Setup was simple and the cloud access means our team can work from anywhere. Highly recommended for modern schools.',
    rating: 4.8,
  },
  {
    image: '/logo-minimized.png',
    name: 'Milica Nikolić',
    userName: 'Teacher',
    comment:
      'Edusoft saves me hours every week on admin work. I can focus more on teaching and less on paperwork.',
    rating: 5.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our 1000+ Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: 'start',
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map(review => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${
                          i < Math.round(review.rating)
                            ? 'fill-primary text-primary'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>
                        {review.name
                          .split(' ')
                          .map(n => n[0])
                          .join('')
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
