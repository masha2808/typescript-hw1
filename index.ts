// 1. Add typings/access modifiers to the fruitBasket constant
enum Fruit {
  BANANA = 'banana',
  ORANGE = 'orange',
  KIWI = 'kiwi',
  APPLE = 'apple'
}

type FruitBasket = {
  banana: Number;
  orange: Number;
  kiwi: Number;
  apple: Number;
};

const fruitBasket: FruitBasket = {
  banana: 2,
  orange: 3,
  kiwi: 2,
  apple: 3
};

// 2. Add typings/access modifiers to the Person class
type Gender = 'male' | 'female';

class Person {
  private name: String;
  private gender: Gender;
  private age: Number;
  private likes: String[];

  public constructor(
    name: String,
    gender: Gender,
    age: Number,
    likes: String[]
  ) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.likes = likes;
  }

  public introduce(): String {
    const { name, gender, age, likes } = this;
    const goodLookingMap = new Map([['male', 'handsome'], ['female', 'cute']]);
    return `
      Hello, I'm ${name}, ${age} years old, I like: ${likes.join(', ')}. 
      As you can see, I'm quite ${goodLookingMap.get(gender)} too!
    `;
  }
}

const Dima = new Person('Dima', 'male', 22, ['video games', 'martial arts']);

// 3. Add typings/access modifiers to MovieService class
interface Logger {
  log(err: Error): void;
}

class MovieService {
  private logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }
  public getMovies(): Promise<String[]> {
    return Promise.resolve(['Jaws', 'Spider-Man']).catch(err => {
      this.logger.log(err);
      return [];
    });
  }
}

class LoggerOne implements Logger {
  public log(err: Error): void {
    console.log('sending logs to log storage 1', err);
  }
}
class LoggerTwo implements Logger {
  public log(err: Error): void {
    console.log('sending logs to log storage 2', err);
  }
}

const movieService1 = new MovieService(new LoggerOne());
const movieService2 = new MovieService(new LoggerTwo());
