import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const popularBreeds = [
  "Labrador Retriever",
  "German Shepherd",
  "Golden Retriever",
  "French Bulldog",
  "Bulldog",
];

const Index = () => {
  const [showBreeds, setShowBreeds] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-4xl font-bold mb-2">All About Dogs</CardTitle>
          <CardDescription className="text-xl">Man's best friend and loyal companion</CardDescription>
        </CardHeader>
        <CardContent>
          <img 
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a" 
            alt="Cute dog" 
            className="mx-auto object-cover w-full h-64 rounded-lg mb-6"
          />
          <p className="mb-4">
            Dogs have been domesticated for thousands of years and are known for their loyalty, 
            companionship, and diverse breeds. They come in all shapes and sizes, each with 
            unique characteristics and temperaments.
          </p>
          <Button 
            onClick={() => setShowBreeds(!showBreeds)}
            className="mb-4"
          >
            {showBreeds ? 'Hide' : 'Show'} Popular Breeds
          </Button>
          {showBreeds && (
            <ul className="list-disc pl-6">
              {popularBreeds.map((breed, index) => (
                <li key={index} className="mb-2">{breed}</li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
