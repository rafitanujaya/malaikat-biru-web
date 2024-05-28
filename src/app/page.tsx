import { AnimatedList } from "@/components/magicUI/animated-list";
import { Notification } from "@/components/notifications/Index";

let notifications = [
  {
    name: "admin",
    description: "kapan web malaikat biru dibuat",
    time: "15m ago",
 
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "bang kapan ada web embe",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "ku pengen guild malaikat punya website",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "aku butuh website untuk informasi guild",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];
 
notifications = Array.from({ length: 10 }, () => notifications).flat();

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row justify-center min-h-screen items-center">
      <div className="text-center ">
        <h1 className="text-2xl font-bold mb-2">Malaikat Biru</h1>
        <p className="text-lg">Our website is currently under construction.</p>
        <p className="text-lg">Stay tuned for something amazing!</p>
      </div>

      <div className="relative flex max-h-[400px] min-h-[400px] w-full max-w-[32rem] flex-col overflow-hidden rounded-lg p-6 shadow-lg">
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
      
    </main>
  );
}
