type Question = {
  id?: number;
  text: string;
  rating?: number | null;
};

interface Survey {
  name: string;
  email: string;
  waiter: string;
  questions?: Question[] | null;
  comments: string;
  new: boolean;
}
