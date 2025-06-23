
import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share, User } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const feedPosts = [
  {
    id: 1,
    user: "FitnessGuru",
    content: "Morning workout complete! 💪 Remember, consistency is key!",
    category: "fitness",
    engagement: 0,
    avatar: "🏋️"
  },
  {
    id: 2,
    user: "TechReviewer",
    content: "New iPhone features that will blow your mind! 📱✨",
    category: "tech",
    engagement: 0,
    avatar: "📱"
  },
  {
    id: 3,
    user: "FoodieLife",
    content: "Perfect pasta recipe for beginners! Who's trying this? 🍝",
    category: "food",
    engagement: 0,
    avatar: "🍝"
  },
  {
    id: 4,
    user: "TravelBug",
    content: "Hidden gems in Tokyo you MUST visit! Thread below 🧵",
    category: "travel",
    engagement: 0,
    avatar: "✈️"
  },
  {
    id: 5,
    user: "StudyHacks",
    content: "5 study techniques that actually work (backed by science)",
    category: "education",
    engagement: 0,
    avatar: "📚"
  }
];

const FeedSimulator = () => {
  const [userProfile, setUserProfile] = useState<string[]>([]);
  const [visiblePosts, setVisiblePosts] = useState(feedPosts.slice(0, 3));
  const [interactions, setInteractions] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("feedSimState");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (Array.isArray(data.userProfile)) setUserProfile(data.userProfile);
        if (Array.isArray(data.visiblePosts)) setVisiblePosts(data.visiblePosts);
        if (typeof data.interactions === "number") setInteractions(data.interactions);
      } catch (_) {}
    }
  }, []);

  useEffect(() => {
    const payload = { userProfile, visiblePosts, interactions };
    localStorage.setItem("feedSimState", JSON.stringify(payload));
  }, [userProfile, visiblePosts, interactions]);

  const handleLike = (postId: number, category: string) => {
    setUserProfile(prev => [...prev, category]);
    setInteractions(prev => prev + 1);
    toast({ title: `Liked ${category}` });
    
    // Update post engagement
    setVisiblePosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, engagement: post.engagement + 1 }
        : post
    ));

    // Algorithm learns and shows more similar content
    setTimeout(() => {
      const newPost = feedPosts.find(post => 
        post.category === category && !visiblePosts.some(vp => vp.id === post.id)
      );
      if (newPost) {
        setVisiblePosts(prev => [newPost, ...prev.slice(0, 2)]);
      }
    }, 1000);
  };

  const resetSimulation = () => {
    setUserProfile([]);
    setInteractions(0);
    setVisiblePosts(feedPosts.slice(0, 3));
  };

  const getTopInterests = () => {
    const counts = userProfile.reduce((acc, category) => {
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return Object.entries(counts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([category]) => category);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-purpleblue-700">Your Feed Simulator</h3>
        <button 
          onClick={resetSimulation}
          className="px-4 py-2 bg-purpleblue-100 text-purpleblue-700 rounded-lg hover:bg-purpleblue-200 transition"
        >
          Reset
        </button>
      </div>

      {/* User Profile Analysis */}
      {interactions > 0 && (
        <div className="mb-4 p-3 bg-purpleblue-50 rounded-lg">
          <h4 className="font-semibold text-purpleblue-700 mb-2">Algorithm Analysis:</h4>
          <p className="text-sm text-purpleblue-600">
            After {interactions} interactions, you seem interested in: {getTopInterests().join(', ')}
          </p>
        </div>
      )}

      {/* Feed Posts */}
      <div className="space-y-4">
        {visiblePosts.map((post) => (
          <div key={post.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">{post.avatar}</span>
              <div>
                <h4 className="font-semibold">{post.user}</h4>
                <span className="text-xs text-gray-500 capitalize">{post.category}</span>
              </div>
            </div>
            <p className="mb-3">{post.content}</p>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => handleLike(post.id, post.category)}
                className="flex items-center gap-1 text-red-500 hover:text-red-600 transition"
              >
                <Heart size={18} className={post.engagement > 0 ? 'fill-current' : ''} />
                <span>{post.engagement}</span>
              </button>
              <button className="flex items-center gap-1 text-gray-500 hover:text-gray-600">
                <MessageCircle size={18} />
                <span>Comment</span>
              </button>
              <button className="flex items-center gap-1 text-gray-500 hover:text-gray-600">
                <Share size={18} />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center text-sm text-gray-600">
        💡 Like posts to see how the algorithm learns your preferences!
      </div>
    </div>
  );
};

export default FeedSimulator;
