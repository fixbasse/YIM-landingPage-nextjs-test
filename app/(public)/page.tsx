import Topic from "./_components/Topic/Topics";
import Hero from "./_components/Hero/Hero";
import Courses from "./_components/Courses/Courses";
import OnlineCourses from "./_components/Onlines/OnlineCourses";


export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <Topic />
      <Courses />
      <OnlineCourses />
    </main>
  );
}