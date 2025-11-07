import React from 'react';
const Card = ({ title, content, children }) => {
  return (
    <div className="bg-[#000000] p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold mb-4 text-[#0D84FB] font-poppins">{title}</h2>
      <p className="text-[#FFFFFF] font-regular font-poppins mb-6">{content}</p>
      {children}
    </div>
  );
};

const Details = () => {
  const stacks = [
    { name: "Android", url: "/.NET.png" },
    { name: "PostgreSQL", url: "/Group 168.png" },
    { name: "Firebase", url: "/Android.png" },
    { name: "AWS", url: "/AWS.png" },
    { name: "React", url: "/Group 169.png" },
    { name: "jQuery", url: "/devicon_firebase-wordmark.png" },
    { name: "VS Code", url: "/VS Studio.png" },
    { name: "Adobe XD", url: "vscode-icons_file-type-sql.png" },
    { name: "PHP", url: "/Group 170.png" },
    { name: "Figma", url: "/Group 182.png" },
    { name: "Jira", url: "/Group 186.png" },
    { name: "GitHub", url: "/React.png" },
    { name: "Python", url: "/XD.png" },
    { name: "Node.js", url: "Tensor flow.png" },
    { name: "npm", url: "/Vector.png" },
    { name: "npm", url: "/vscode-icons_file-type-pgsql.png" },
  ];

  return (
    <div className="min-h-screen bg-[#323235] text-white p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2">
        {/* Global Reach and Project Success */}
        <Card
          title="Global Reach and Project Success"
          content="Discover our success: numerous projects in multiple countries, serving a diverse and growing clientele."
        >
          <div className="grid grid-cols-3 gap-4 text-center mt-8">
            <div>
              <p className="text-[#0D84FB] text-4xl font-bold">100+</p>
              <p className="text-gray-400 text-sm mt-2">Projects Completed</p>
            </div>
            <div>
              <p className="text-[#0D84FB] text-4xl font-bold">4+</p>
              <p className="text-gray-400 text-sm mt-2">Years Of Experience</p>
            </div>
            <div>
              <p className="text-[#0D84FB] text-4xl font-bold">5+</p>
              <p className="text-gray-400 text-sm mt-2">Countries Served</p>
            </div>
          </div>
        </Card>

        {/* Methodologies We Use */}
        <Card
          title="Methodologies We Use"
          content="We employ industry-leading methodologies to ensure optimal results."
        >
          <div className="flex justify-center items-center space-x-12 mt-8">
            <div className="flex items-center space-x-2">
              <img 
                src="./Design Thinking.png"
                alt="Design Thinking"
                className="w-24 h-16"
              />
              <p className="text-gray-400 text-sm">Design Thinking</p>
            </div>

            <div className="flex items-center space-x-2">
              <img 
                src="https://i.postimg.cc/DJ6PSxwH/Group-178.png"
                alt="Scrum"
                className="w-12 h-20"
              />
              <p className="text-gray-400 text-sm">Scrum</p>
            </div>
          </div>
        </Card>

        {/* Stacks We Use */}
        <div className="md:col-span-2 relative overflow-hidden">
          <Card
            title="Stacks We Use"
            content="We leverage a comprehensive and modern technology stack, utilizing cutting-edge tools and platforms to deliver high performance, scalability, and reliability in all our projects."
          >
            {/* Smooth infinite scroll */}
            <div className="stacks-wrapper mt-8">
              <div className="stacks-track">
                {[...stacks, ...stacks].map((stack, index) => (
                  <div key={index} className="stack-item">
                    <img
                      src={stack.url}
                      alt={stack.name}
                      className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Inline CSS */}
          <style>{`
            .stacks-wrapper {
              overflow: hidden;
              position: relative;
              width: 100%;
              white-space: nowrap;
            }

            .stacks-track {
              display: flex;
              align-items: center;
              width: max-content;
              animation: scrollStacks 60s linear infinite;
            }

            .stack-item {
              flex: 0 0 auto;
              margin-right: 2.5rem;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            @keyframes scrollStacks {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default Details;
