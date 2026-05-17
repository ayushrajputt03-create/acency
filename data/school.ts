import {
  Award,
  BookOpen,
  Brain,
  CalendarCheck,
  Camera,
  CheckCircle2,
  Clock,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  MapPin,
  MessageSquareText,
  Phone,
  ShieldCheck,
  Sparkles,
  Trophy,
  UsersRound
} from "lucide-react";

export const school = {
  name: "TRIVENI TRIRATAN PUBLIC JR. HIGH SCHOOL",
  shortName: "Triveni Triratan Public Jr. High School",
  type: "Public Junior High School",
  principal: "Sh. Ravinder Kumar",
  address:
    "Prakash Vihar, Main 25 Feet Road, Loni, Ghaziabad, Uttar Pradesh 201102",
  locality: "Prakash Vihar, Loni, Ghaziabad",
  phone: "7838296298",
  secondaryPhone: "9911168184",
  displayPhone: "7838296298 / 9911168184",
  whatsapp:
    "whatsapp://send?phone=919911168184&text=Hello%20I%20want%20admission%20details",
  whatsappWeb:
    "https://wa.me/919911168184?text=Hello%20I%20want%20admission%20details",
  mapQuery:
    "Triveni Triratan Public Jr. High School Prakash Vihar Main 25 Feet Road Loni Ghaziabad Uttar Pradesh 201102",
  openingHours: "Mon - Sat: 8:00 AM - 2:30 PM"
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Admission", href: "#admissions" },
  { label: "Facilities", href: "#facilities" },
  { label: "Academics", href: "#academics" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" }
];

export const seoKeywords = [
  "Best school in Loni",
  "Best school near me",
  "Best school nearby",
  "Best school in Ghaziabad",
  "Public junior high school in Loni",
  "Admission open school in Loni",
  "Affordable school in Loni",
  "Best school for children in Loni"
];

export const heroStats = [
  { label: "Admission open for session", value: "2026-27" },
  { label: "Parent-friendly guidance", value: "2" },
  { label: "Focus on discipline, values, and progress", value: "100%" }
];

export const reasons = [
  {
    icon: UsersRound,
    title: "Experienced Teachers",
    text: "Caring teachers support strong basics, regular practice, and confident classroom participation."
  },
  {
    icon: ShieldCheck,
    title: "Safe & Disciplined Environment",
    text: "A structured school culture helps children learn with respect, routine, and responsibility."
  },
  {
    icon: GraduationCap,
    title: "Focus on Academic Excellence",
    text: "Regular lessons, revision, tests, and personal attention keep progress visible."
  },
  {
    icon: HeartHandshake,
    title: "Value-Based Education",
    text: "Students learn good conduct, honesty, respect, teamwork, and moral values."
  },
  {
    icon: CalendarCheck,
    title: "Regular Tests & Parent Updates",
    text: "Unit tests and parent communication help families understand every child's growth."
  },
  {
    icon: Award,
    title: "Affordable Quality Education",
    text: "A strong school experience for Loni families with practical admission support."
  },
  {
    icon: Lightbulb,
    title: "Activity-Based Learning",
    text: "Students learn through examples, activities, participation, and guided practice."
  },
  {
    icon: BookOpen,
    title: "Strong Foundation for Students",
    text: "Reading, writing, mathematics, science, discipline, and confidence are built step by step."
  }
];

export const facilities = [
  { icon: Sparkles, title: "Smart Learning Environment", text: "Modern classroom methods with clear explanations and active participation." },
  { icon: CheckCircle2, title: "Clean Classrooms", text: "Neat, organized classrooms that support focus and healthy daily learning." },
  { icon: ShieldCheck, title: "Safe Campus", text: "Careful supervision, disciplined routines, and a child-friendly environment." },
  { icon: Trophy, title: "Sports & Activities", text: "Games, activities, assemblies, and confidence-building school moments." },
  { icon: CalendarCheck, title: "Regular Unit Tests", text: "Frequent assessments help students revise and improve steadily." },
  { icon: MessageSquareText, title: "Parent-Teacher Communication", text: "Parents receive updates and guidance for academic and personal progress." },
  { icon: HeartHandshake, title: "Moral Education", text: "Daily emphasis on values, manners, respect, and responsible behavior." },
  { icon: Brain, title: "Student Progress Tracking", text: "Teachers monitor classwork, tests, habits, and individual development." }
];

export const academics = [
  { icon: BookOpen, title: "Core Subjects", text: "English, Hindi, Mathematics, Science, Social Studies, and general knowledge foundations." },
  { icon: Lightbulb, title: "Concept Clarity", text: "Lessons are explained with examples so children understand instead of memorizing blindly." },
  { icon: CheckCircle2, title: "Revision & Tests", text: "Regular revision and unit tests keep students prepared and parents informed." },
  { icon: Award, title: "Student Development", text: "Discipline, confidence, communication, moral values, and responsibility grow together." }
];

export const testimonials = [
  {
    name: "Parent from Prakash Vihar",
    role: "Admission inquiry parent",
    quote:
      "The school gives attention to discipline and studies. Teachers communicate well and guide children with care."
  },
  {
    name: "Loni Parent",
    role: "Junior class parent",
    quote:
      "We wanted an affordable school in Loni with a safe environment. Triveni Triratan feels reliable for our child."
  },
  {
    name: "Ghaziabad Family",
    role: "Parent testimonial",
    quote:
      "Regular tests, personal attention, and moral education make the school a good choice for children."
  }
];

export const gallery = [
  {
    src: "/images/triveni-hero.png",
    alt: "Students walking with teacher at Triveni Triratan Public Jr. High School",
    title: "Safe School Environment"
  },
  {
    src: "/images/triveni-lab.png",
    alt: "Activity based learning and science practice at school",
    title: "Activity-Based Learning"
  },
  {
    src: "/images/triveni-classroom.png",
    alt: "Clean classroom learning with teacher guidance",
    title: "Clean Classrooms"
  },
  {
    src: "/images/triveni-toppers.jpeg",
    alt: "School toppers achievement poster",
    title: "Student Achievement"
  }
];

export const contactHighlights = [
  { icon: Phone, label: "Admission Helpline", value: school.displayPhone },
  { icon: MapPin, label: "Location", value: "Prakash Vihar, Main 25 Feet Road, Loni" },
  { icon: Clock, label: "School Hours", value: school.openingHours }
];
