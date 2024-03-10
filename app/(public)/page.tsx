import Topic from "./_components/Topic/Topics";
import Hero from "./_components/Hero/Hero";
import Courses from "./_components/Courses/Courses";
import OnlineCourses from "./_components/Onlines/OnlineCourses";
import NewsAndArticle from "./_components/News/NewsAndArticle";
import Footer from "@/components/footer/Footer";
import Question from "./_components/Question/Question";


export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <Hero />
      <Topic />
      <Courses />
      <OnlineCourses />
      <NewsAndArticle />
      <Question />
    </main>
  );
}
