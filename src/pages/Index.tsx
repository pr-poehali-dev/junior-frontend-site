import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

export default function Index() {
  const skills = [
    { name: "React", level: 85, color: "bg-blue-500" },
    { name: "TypeScript", level: 80, color: "bg-blue-600" },
    { name: "JavaScript", level: 90, color: "bg-yellow-500" },
    { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
    { name: "Tailwind CSS", level: 85, color: "bg-cyan-500" },
    { name: "Git", level: 75, color: "bg-red-500" },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "React-based онлайн магазин с корзиной и системой оплаты",
      tech: ["React", "TypeScript", "Stripe API"],
      link: "#",
      status: "Завершен"
    },
    {
      title: "Task Manager App",
      description: "Приложение для управления задачами с drag & drop",
      tech: ["React", "Redux", "CSS Grid"],
      link: "#",
      status: "В разработке"
    },
    {
      title: "Weather Dashboard",
      description: "Погодное приложение с геолокацией и прогнозом",
      tech: ["React", "API", "Chart.js"],
      link: "#",
      status: "Завершен"
    }
  ];

  const codeExample = `// React Hook пример
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
};`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 font-source">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-6 py-20 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold font-inter bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                Frontend
                <br />
                Developer
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Привет! Я Junior Frontend разработчик с страстью к созданию современных 
                веб-приложений. Специализируюсь на React, TypeScript и создании отличного UX.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg">
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать CV
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg">
                  <Icon name="Github" className="mr-2" size={20} />
                  GitHub
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0 animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-20 animate-pulse-color"></div>
                <img 
                  src="/img/5682b908-85a7-4375-a621-3fbb0878eaf0.jpg" 
                  alt="Developer Photo" 
                  className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center font-inter mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            О себе
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Card className="border-none shadow-xl bg-gradient-to-br from-white to-purple-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-inter">Моя история</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Начал свой путь в веб-разработке 2 года назад с изучения HTML и CSS. 
                    Быстро увлекся JavaScript и современными фреймворками.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Сейчас активно изучаю React экосистему, TypeScript и современные инструменты 
                    разработки. Люблю создавать интуитивные интерфейсы и решать сложные задачи.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">🎯 Целеустремленный</Badge>
                    <Badge variant="secondary" className="bg-pink-100 text-pink-700">🚀 Быстро обучаемый</Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">💡 Креативный</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6 animate-fade-in">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center font-inter mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Портфолио
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none bg-gradient-to-br from-white to-purple-50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-inter group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant={project.status === "Завершен" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <Icon name="ExternalLink" className="mr-2" size={16} />
                    Посмотреть проект
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center font-inter mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Пример кода
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="ml-4 text-sm text-gray-300">useCounter.ts</span>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <pre className="p-6 bg-gray-900 text-green-400 overflow-x-auto text-sm font-mono leading-relaxed">
                  <code>{codeExample}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center font-inter mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Опыт и образование
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Card className="border-l-4 border-l-purple-600 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-inter">Frontend Developer</CardTitle>
                      <CardDescription className="text-purple-600 font-medium">Freelance • 2023 - настоящее время</CardDescription>
                    </div>
                    <Icon name="Briefcase" className="text-purple-600" size={24} />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Разработка пользовательских интерфейсов для малых и средних проектов. 
                    Создание адаптивных веб-приложений на React с использованием современных технологий.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-pink-600 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-inter">Курс "React Разработчик"</CardTitle>
                      <CardDescription className="text-pink-600 font-medium">Online School • 2023</CardDescription>
                    </div>
                    <Icon name="GraduationCap" className="text-pink-600" size={24} />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Интенсивный курс по современной frontend разработке. 
                    Изучение React, TypeScript, Redux, тестирования и инструментов сборки.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-inter">Высшее техническое образование</CardTitle>
                      <CardDescription className="text-blue-600 font-medium">Технический университет • 2022</CardDescription>
                    </div>
                    <Icon name="School" className="text-blue-600" size={24} />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Бакалавр информационных технологий. 
                    Изучение основ программирования, алгоритмов, баз данных и системного анализа.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-inter mb-8">
            Готов к новым проектам!
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-purple-100">
            Ищу возможности для роста в команде опытных разработчиков. 
            Готов вносить вклад в интересные проекты и учиться новому.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
              <Icon name="Mail" className="mr-2" size={20} />
              Написать письмо
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg">
              <Icon name="Linkedin" className="mr-2" size={20} />
              LinkedIn
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg">
              <Icon name="Phone" className="mr-2" size={20} />
              Telegram
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}