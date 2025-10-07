import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Send, Home, Calendar } from 'lucide-react';
import { Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
export default function Dashboard() {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: 'user', text: input }]);
      setInput('');
      
      
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          type: 'bot', 
          text: 'Thank you for your message. How else can I help you?' 
        }]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  //calendar

   const [selectedDate, setSelectedDate] = useState(15);
  
  const daysInMonth = 31;
  const startDay = 3; // October 2025 starts on Wednesday
  const monthName = "October 2025";
  
  const events = {
    15: [
      { title: "Team Meeting", time: "10:00 AM", location: "Room 101", duration: "1 hour" },
      { title: "Client Presentation", time: "2:00 PM", location: "Room 202", duration: "2 hours" },
      { title: "Strategy Session", time: "4:30 PM", location: "Room 101", duration: "1.5 hours" }
    ],
    18: [
      { title: "Project Review", time: "11:00 AM", location: "Room 303", duration: "1 hour" }
    ],
    22: [
      { title: "Department Sync", time: "9:00 AM", location: "Room 101", duration: "45 min" },
      { title: "Training Workshop", time: "3:00 PM", location: "Room 404", duration: "2 hours" }
    ]
  };
  
  const getDaysArray = () => {
    const days = [];
    // Empty cells for days before month starts
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }
    // Days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };
  
  const hasEvents = (day) => events[day] && events[day].length > 0;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="min-h-screen py-12 b-g-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Chatbot Section hihi */}
<div className="mb-14 max-w-4xl mx-auto overflow-hidden bg-gradient-to-t from-[#05b7aa] via-[#7de8dc] via-30% to-[#e8fffc] to-90% shadow-[inset_0_0px_6px_rgba(0,0,0,0.25),0_-6px_12px_#34fff0,0_6px_20px_#34fff0] rounded-3xl flex flex-col h-[20rem] animate-glow">



  {/* Chatbot Header */}
  <div className="px-6 py-4">
    <h2 className="text-xl font-semibold text-[#05b7aa]">Chat Assistant</h2>
  </div>
  
  {/* Scrollable Messages */}
  <div className="flex-1 overflow-y-auto p-6">
    {messages.map((msg, idx) => (
      <div
        key={idx}
        className={`mb-4 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
      >
        <div
          className={`max-w-xs rounded-lg px-4 py-2 ${
            msg.type === 'user'
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-800 shadow'
          }`}
        >
          {msg.text}
        </div>
      </div>
    ))}
  </div>

  {/* Input Bar */}
  <div className="border-t border-gray-200/30 p-4">
    <div className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your message..."
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
  onClick={handleSend}
  className="rounded-lg bg-[#05b7aa] px-6 py-2 text-white font-medium shadow-[0_0_6px_#5ef5e9] transition-all duration-300 hover:bg-[#04c3b5] hover:shadow-[0_0_8px_#7ff8ee] focus:outline-none focus:ring-2 focus:ring-[#5ef5e9]"
>
        <Send className="h-5 w-5" />
      </button>
    </div>
  </div>
</div>

        {/* Bottom Cards Section */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Available Room Card */}
          <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg transition hover:shadow-xl">
            <div className="border-b border-gray-200 bg-gradient-to-r from-[#0097b0] to-[#06b6d4] px-6 py-4">
              <div className="flex items-center gap-2">
                <Home className="h-6 w-6 text-white" />
                <h3 className="text-lg font-semibold text-white">Available Rooms</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50">
                  <div>
                    <p className="font-medium text-gray-900">Room 101</p>
                    <p className="text-sm text-gray-600">Capacity: 4 people</p>
                  </div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                    Available
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50">
                  <div>
                    <p className="font-medium text-gray-900">Room 202</p>
                    <p className="text-sm text-gray-600">Capacity: 8 people</p>
                  </div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                    Available
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50">
                  <div>
                    <p className="font-medium text-gray-900">Room 303</p>
                    <p className="text-sm text-gray-600">Capacity: 2 people</p>
                  </div>
                  <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
                    Occupied
                  </span>
                </div>
              </div>
            </div>
          </div>

        {/* Check Calendar Card */}
      <div className="overflow-hidden bg-gradient-to-br from-slate-600 to-teal-950 shadow-2xl sm:rounded-lg transition hover:shadow-teal-900/20 hover:shadow-2xl  max-w-3xl w-full">
        <div className=" bg-gradient-to-r from-[#06b6d4] to-[#0f172a] px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-white" />
              <h3 className="text-lg font-semibold text-white">Room Calendar</h3>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-white hover:bg-teal-700/50 rounded-full p-1 transition">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-white font-medium">{monthName}</span>
              <button className="text-white hover:bg-teal-700/50 rounded-full p-1 transition">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-sm font-semibold text-teal-300/70 py-2">
                {day}
              </div>
            ))}
            
            {getDaysArray().map((day, index) => (
              <button
                key={index}
                onClick={() => day && setSelectedDate(day)}
                disabled={!day}
                className={`
                  aspect-square rounded-lg text-sm font-medium transition-all relative
                  ${!day ? 'invisible' : ''}
                  ${day === selectedDate 
                    ? 'bg-teal-600 text-white shadow-lg shadow-teal-900/50 ring-2 ring-teal-400/50 scale-105' 
                    : hasEvents(day)
                    ? 'bg-teal-950/50 text-teal-200 hover:bg-teal-900/50 border border-teal-800/30'
                    : 'text-gray-300 hover:bg-gray-800/50 border border-teal-900/20'
                  }
                `}
              >
                {day}
                {hasEvents(day) && day !== selectedDate && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                    <div className="w-1 h-1 bg-teal-400 rounded-full"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
          
          <div className="mt-6 border-t border-teal-900/40 pt-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold">
                {selectedDate}
              </div>
              <h4 className="font-semibold text-white">
                {events[selectedDate] ? `${events[selectedDate].length} Scheduled Events` : 'No Events Scheduled'}
              </h4>
            </div>
            
            {events[selectedDate] ? (
              <div className="space-y-3">
                {events[selectedDate].map((event, index) => (
                  <div key={index} className="rounded-lg border border-teal-800/50 bg-teal-950/30 p-4 transition hover:shadow-lg hover:shadow-teal-900/30 hover:border-teal-700/50">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="font-medium text-white">{event.title}</p>
                      <div className="flex items-center gap-1 text-sm text-teal-300">
                        <Clock className="h-4 w-4" />
                        <span className="font-medium">{event.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-teal-200/70">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <span>•</span>
                      <span>{event.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-teal-200/50">
                <Calendar className="h-12 w-12 mx-auto mb-2 opacity-20" />
                <p>All rooms available on this day</p>
              </div>
            )}
          </div>
        </div>
      </div>


        </div>
      </div>
    </div>

        </AuthenticatedLayout>
    );
}
