const domains = [
  {
    n:'01', name:'Design', tone:'cinnamon', intro:'Design shapes how people understand, use and experience digital products and services.', tags:['UI/UX','Product','Visual'],
    sections:[
      ['What is Design?','Design is the deliberate process of understanding a problem, shaping an experience or visual system, and refining the result for people and context.'],
      ['Career Tree',['UI Designer','UX Designer','Product Designer','Visual Designer','UX Researcher','Interaction Designer','Motion Designer']],
      ['Core Skills',['Visual hierarchy','Typography & layout','User research','Information architecture','Wireframing','Prototyping','Design systems','Communication']],
      ['Tools & Technology',['Figma','Adobe Creative Cloud','Framer','Design systems','Prototyping tools','Collaboration platforms']],
      ['AI · Manual · Hybrid','AI can support research, ideation, copy exploration and repetitive production. Human designers remain responsible for context, judgment, accessibility, trade-offs and final decisions.'],
      ['Work Process',['Understand the problem','Research users & context','Define the direction','Create concepts','Prototype','Test','Refine','Communicate the solution']],
      ['Learning Roadmap',['Design fundamentals','UI/UX foundations','Figma & prototyping','Research & usability','Design systems','Real projects','Portfolio','Interview preparation']],
      ['Role Progression',['Junior Designer','Designer','Senior Designer','Lead / Principal Designer','Design Manager / Director']],
      ['Job-Readiness Checklist',['Strong fundamentals','2–4 meaningful projects','Case studies','Working portfolio','Ability to explain decisions','Collaboration skills','Interview preparation']]
    ]
  },
  {
    n:'02', name:'Software Development', tone:'sienna', intro:'Software development turns requirements and ideas into working, tested and maintainable software.', tags:['Frontend','Backend','Full Stack'],
    sections:[
      ['What is Software Development?','Software development involves analyzing needs, designing solutions, implementing code, testing behavior, deploying software and maintaining it over time.'],
      ['Career Tree',['Frontend Developer','Backend Developer','Full Stack Developer','Mobile Developer','Software Engineer','Game Developer','Embedded Software Developer']],
      ['Core Skills',['Programming fundamentals','Data structures & algorithms','Version control','Debugging','Testing','APIs','Databases','System design']],
      ['Technology Stack',['HTML · CSS · JavaScript','React · Angular · Vue','Node.js · Java · Python · C#','SQL · PostgreSQL · MongoDB','Git · GitHub','Cloud & deployment platforms']],
      ['AI · Manual · Hybrid','AI can assist with code generation, explanation, refactoring, tests and debugging. Developers must review outputs, understand the system, test behavior and own the final implementation.'],
      ['Work Process',['Requirements','Design','Implementation','Code review','Testing','Debugging','Deployment','Monitoring & maintenance']],
      ['Learning Roadmap',['Programming fundamentals','Git & GitHub','Web or application fundamentals','One primary language','Framework','APIs & databases','Projects','Deployment','Interview preparation']],
      ['Role Progression',['Junior Developer','Software Developer / Engineer','Senior Engineer','Lead Engineer','Staff / Principal Engineer or Engineering Manager']],
      ['Job-Readiness Checklist',['Strong fundamentals','GitHub projects','Readable code','Testing knowledge','Debugging ability','One deployable project','Technical interview practice']]
    ]
  },
  {
    n:'03', name:'Data', tone:'clay', intro:'Data careers turn raw information into reliable analysis, systems, models and decisions.', tags:['Analytics','Engineering','Science'],
    sections:[
      ['What is Data Work?','Data work includes collecting, preparing, storing, analyzing and communicating information so organizations can make informed decisions or build data-driven systems.'],
      ['Career Tree',['Data Analyst','Business Intelligence Analyst','Data Engineer','Analytics Engineer','Data Scientist','Database Engineer']],
      ['Core Skills',['SQL','Statistics','Data cleaning','Data visualization','Python or R','Data modeling','Communication','Business understanding']],
      ['Technology Stack',['SQL','Python / R','Excel / spreadsheets','Power BI / Tableau','PostgreSQL / warehouses','ETL / ELT tools','Cloud data platforms']],
      ['AI · Manual · Hybrid','AI can accelerate exploration, SQL drafting, documentation and pattern discovery. Data professionals still validate data quality, assumptions, methodology, privacy and conclusions.'],
      ['Work Process',['Define the question','Collect data','Validate quality','Prepare & transform','Analyze / model','Visualize','Communicate findings','Monitor & improve']],
      ['Learning Roadmap',['Excel & data basics','SQL','Statistics','Visualization','Python','Projects','Portfolio','Business case practice']],
      ['Role Progression',['Junior Analyst','Analyst / Engineer','Senior Analyst / Engineer','Lead / Principal','Manager / Architect']],
      ['Job-Readiness Checklist',['SQL practice','Real datasets','Dashboard or analysis project','Clear explanations','Data quality awareness','Portfolio','Case-study practice']]
    ]
  },
  {
    n:'04', name:'AI & Machine Learning', tone:'ember', intro:'AI and machine-learning careers build systems that learn from data, generate outputs or automate intelligent tasks.', tags:['ML','GenAI','Research'],
    sections:[
      ['What is AI & ML?','Artificial intelligence is a broad field of systems performing tasks associated with intelligent behavior. Machine learning is a major approach that learns patterns from data.'],
      ['Career Tree',['Machine Learning Engineer','AI Engineer','Generative AI Engineer','NLP Engineer','Computer Vision Engineer','ML Researcher','MLOps Engineer']],
      ['Core Skills',['Python','Linear algebra','Probability & statistics','Machine learning','Model evaluation','Data pipelines','Software engineering','Responsible AI']],
      ['Technology Stack',['Python','PyTorch / TensorFlow','Transformers','Vector databases','Model APIs','Experiment tracking','Cloud GPU platforms']],
      ['AI · Manual · Hybrid','AI is the subject of the work, but human expertise remains essential for problem definition, data quality, evaluation, safety, deployment and monitoring.'],
      ['Work Process',['Define objective','Prepare data','Select approach','Train / prompt / fine-tune','Evaluate','Deploy','Monitor','Iterate']],
      ['Learning Roadmap',['Python','Math & statistics','Machine learning fundamentals','Deep learning','LLMs / GenAI','Evaluation','Deployment & MLOps','Real projects']],
      ['Role Progression',['Junior / Associate ML Engineer','ML / AI Engineer','Senior Engineer','Staff / Principal','Research or Technical Lead']],
      ['Job-Readiness Checklist',['Strong Python','ML project','Evaluation knowledge','Model/API integration','Responsible AI awareness','GitHub portfolio','Ability to explain trade-offs']]
    ]
  },
  {
    n:'05', name:'Cloud & Infrastructure', tone:'bark', intro:'Cloud and infrastructure professionals build and operate the computing foundations on which applications and services run.', tags:['Cloud','Infrastructure','Architecture'],
    sections:[
      ['What is Cloud & Infrastructure?','This area covers computing resources, networks, storage, identity, platforms and operational systems used to run technology reliably at scale.'],
      ['Career Tree',['Cloud Engineer','Cloud Architect','Infrastructure Engineer','Systems Engineer','Platform Engineer','Cloud Administrator']],
      ['Core Skills',['Linux','Networking','Identity & access','Automation','Security fundamentals','Monitoring','Reliability','Cost awareness']],
      ['Technology Stack',['AWS / Azure / Google Cloud','Linux','Terraform / IaC','Containers','Kubernetes','Monitoring platforms','CI/CD']],
      ['AI · Manual · Hybrid','AI can help with documentation, configuration suggestions, troubleshooting and automation drafts. Engineers must validate security, reliability, permissions, cost and production impact.'],
      ['Work Process',['Architecture','Provision','Configure','Secure','Automate','Monitor','Optimize','Recover']],
      ['Learning Roadmap',['Networking basics','Linux','One cloud platform','IAM','Storage & compute','Infrastructure as code','Containers','Projects']],
      ['Role Progression',['Cloud / Infrastructure Engineer','Senior Engineer','Cloud / Platform Lead','Cloud Architect','Principal Architect']],
      ['Job-Readiness Checklist',['Hands-on cloud project','Linux basics','Networking knowledge','IAM understanding','Infrastructure automation','Monitoring','Cost/security awareness']]
    ]
  },
  {
    n:'06', name:'DevOps & SRE', tone:'rust', intro:'DevOps and Site Reliability Engineering connect development with reliable delivery and operation of software systems.', tags:['Automation','CI/CD','Reliability'],
    sections:[
      ['What is DevOps & SRE?','DevOps is a set of practices and culture that improve software delivery and operations. SRE applies software engineering principles to reliability, availability and operations.'],
      ['Career Tree',['DevOps Engineer','Site Reliability Engineer','Platform Engineer','Release Engineer','Build Engineer','DevSecOps Engineer']],
      ['Core Skills',['Linux','Git','CI/CD','Containers','Cloud','Infrastructure as code','Observability','Automation']],
      ['Technology Stack',['GitHub Actions / GitLab CI','Docker','Kubernetes','Terraform','Cloud platforms','Prometheus / Grafana','Logging systems']],
      ['AI · Manual · Hybrid','AI can assist with pipeline drafts, troubleshooting hypotheses, documentation and automation. Production changes still require controlled review, testing, security checks and observability.'],
      ['Work Process',['Code','Build','Test','Secure','Package','Deploy','Observe','Improve']],
      ['Learning Roadmap',['Linux & networking','Git','CI/CD','Docker','Cloud','Infrastructure as code','Kubernetes','Observability']],
      ['Role Progression',['Junior DevOps / Platform Engineer','DevOps / SRE','Senior SRE','Lead / Staff','Platform or Reliability Architect']],
      ['Job-Readiness Checklist',['Working CI/CD pipeline','Container project','Cloud deployment','Monitoring dashboard','Automation scripts','Incident basics','Documentation']]
    ]
  },
  {
    n:'07', name:'Cybersecurity', tone:'mahogany', intro:'Cybersecurity protects systems, applications, identities and information by managing security risks and responding to threats.', tags:['Defense','Risk','Security'],
    sections:[
      ['What is Cybersecurity?','Cybersecurity work includes protecting technology and information, identifying weaknesses, managing risk, detecting threats, responding to incidents and improving security controls.'],
      ['Career Tree',['Security Analyst','Security Engineer','Application Security Engineer','Cloud Security Engineer','Security Architect','Incident Responder','Digital Forensics Analyst','GRC / Security Risk Specialist']],
      ['Core Skills',['Networking','Operating systems','Identity & access','Security principles','Threat analysis','Incident response','Risk management','Secure development']],
      ['Technology Stack',['SIEM platforms','EDR tools','Vulnerability scanners','IAM systems','Firewalls','Cloud security services','Security testing tools']],
      ['AI · Manual · Hybrid','AI can support alert triage, summarization, investigation assistance and detection development. Security professionals must validate evidence, preserve context, protect sensitive data and make accountable decisions.'],
      ['Work Process',['Identify assets','Assess risk','Protect','Detect','Analyze','Respond','Recover','Improve']],
      ['Learning Roadmap',['Networking','Linux','Security fundamentals','Identity','Blue-team basics','Specialization','Labs & projects','Certifications where useful']],
      ['Role Progression',['Junior Security Analyst','Security Analyst / Engineer','Senior Security Engineer','Security Lead / Architect','Security Manager / Director']],
      ['Job-Readiness Checklist',['Hands-on labs','Networking fundamentals','Security tooling exposure','Incident-analysis practice','Clear documentation','Ethics & authorization awareness','Portfolio evidence']]
    ]
  },
  {
    n:'08', name:'Quality Engineering & Testing', tone:'copper', intro:'Quality engineering helps teams deliver software that behaves correctly, reliably and safely.', tags:['QA','Automation','Quality'],
    sections:[
      ['What is Quality Engineering?','Quality engineering builds quality into the software lifecycle through test strategy, automation, validation, defect analysis and continuous feedback.'],
      ['Career Tree',['QA Analyst','Software Test Engineer','Automation Test Engineer','Performance Test Engineer','Quality Engineer','Test Lead']],
      ['Core Skills',['Test design','Functional testing','Automation','API testing','Debugging','Risk-based thinking','SQL','Communication']],
      ['Technology Stack',['Playwright / Selenium','Postman','API tools','JUnit / pytest / similar frameworks','CI/CD','SQL','Performance testing tools']],
      ['AI · Manual · Hybrid','AI can generate test ideas, test cases and automation drafts. Testers must verify coverage, edge cases, risks and actual behavior.'],
      ['Work Process',['Understand requirements','Plan tests','Design cases','Execute','Automate','Report defects','Retest','Improve coverage']],
      ['Learning Roadmap',['Testing fundamentals','Web/API basics','SQL','Automation framework','CI/CD','Performance basics','Projects','Interview practice']],
      ['Role Progression',['QA / Test Analyst','Automation / Quality Engineer','Senior Quality Engineer','Test Lead','Quality Architect / Manager']],
      ['Job-Readiness Checklist',['Manual testing foundation','Automation project','API testing','SQL','Bug reports','CI integration','Test strategy understanding']]
    ]
  },
  {
    n:'09', name:'Networking', tone:'sepia', intro:'Networking connects devices, applications and services so information can move securely and reliably.', tags:['Networks','Connectivity','Security'],
    sections:[
      ['What is Networking?','Networking covers the design, configuration, operation and troubleshooting of systems that connect computers, services and users.'],
      ['Career Tree',['Network Technician','Network Administrator','Network Engineer','Network Security Engineer','Network Architect','Wireless Engineer']],
      ['Core Skills',['TCP/IP','DNS','DHCP','Routing & switching','Firewalls','Troubleshooting','Network security','Documentation']],
      ['Technology Stack',['Ethernet / Wi-Fi','Routers & switches','Firewalls','VPNs','DNS/DHCP services','Monitoring tools','Cloud networking']],
      ['AI · Manual · Hybrid','AI can assist with troubleshooting hypotheses, documentation and configuration drafts. Engineers must validate network state, security and operational impact.'],
      ['Work Process',['Design','Configure','Validate','Monitor','Troubleshoot','Secure','Document','Optimize']],
      ['Learning Roadmap',['Networking fundamentals','OSI/TCP-IP','Routing & switching','Linux','Security','Cloud networking','Labs','Specialization']],
      ['Role Progression',['Network Technician','Network Administrator / Engineer','Senior Network Engineer','Network Architect','Principal / Network Lead']],
      ['Job-Readiness Checklist',['Networking labs','Packet analysis','Troubleshooting practice','Device configuration exposure','Security basics','Clear diagrams and documentation']]
    ]
  },
  {
    n:'10', name:'IT Support & Systems', tone:'walnut', intro:'IT support and systems teams keep users, devices, operating systems and workplace technology functioning effectively.', tags:['Support','Systems','Operations'],
    sections:[
      ['What is IT Support & Systems?','This area helps people and organizations use technology effectively through troubleshooting, device management, account administration and systems operations.'],
      ['Career Tree',['IT Support Specialist','Help Desk Technician','Desktop Support','System Administrator','Endpoint Administrator','Systems Engineer']],
      ['Core Skills',['Troubleshooting','Windows / Linux basics','Networking basics','Identity & accounts','Hardware basics','Documentation','Communication','Ticket management']],
      ['Technology Stack',['Windows / Linux','Active Directory / identity platforms','Endpoint management','Remote support tools','Ticketing systems','PowerShell / scripting']],
      ['AI · Manual · Hybrid','AI can help classify tickets, draft responses and suggest troubleshooting steps. Support professionals must verify fixes, protect user data and communicate clearly.'],
      ['Work Process',['Receive request','Identify issue','Diagnose','Resolve','Verify','Document','Escalate when needed','Prevent recurrence']],
      ['Learning Roadmap',['Computer fundamentals','OS basics','Networking','Identity','Troubleshooting','Scripting','Endpoint management','Hands-on labs']],
      ['Role Progression',['IT Support / Help Desk','Desktop / Systems Support','System Administrator','Systems Engineer','Infrastructure / IT Operations Lead']],
      ['Job-Readiness Checklist',['Troubleshooting practice','OS knowledge','Networking basics','Ticket examples','Documentation','Communication skills','Hands-on lab evidence']]
    ]
  },
  {
    n:'11', name:'Business & Systems Analysis', tone:'ochre', intro:'Analysts connect business needs with technology by clarifying problems, requirements, processes and workable solutions.', tags:['Requirements','Process','Analysis'],
    sections:[
      ['What is Analysis?','Business and systems analysts help organizations understand needs, define requirements, improve processes and translate business problems into actionable technology or operational solutions.'],
      ['Career Tree',['Business Analyst','Systems Analyst','IT Analyst','Process Analyst','Requirements Analyst','Product Analyst']],
      ['Core Skills',['Requirements gathering','Process mapping','Stakeholder communication','Data analysis','Documentation','Problem solving','Domain knowledge','Basic technology literacy']],
      ['Technology Stack',['Spreadsheets','SQL','Diagramming tools','Jira / issue tracking','Confluence / documentation','BI tools','Process modeling tools']],
      ['AI · Manual · Hybrid','AI can help summarize meetings, compare requirements and draft documentation. Analysts must validate business context, stakeholder intent and decisions.'],
      ['Work Process',['Discover','Interview','Analyze','Model','Document','Validate','Prioritize','Support implementation']],
      ['Learning Roadmap',['Business fundamentals','Requirements','Process mapping','SQL / data basics','Agile basics','Domain specialization','Case studies','Interview practice']],
      ['Role Progression',['Junior Analyst','Business / Systems Analyst','Senior Analyst','Lead / Principal Analyst','Consulting / Management paths']],
      ['Job-Readiness Checklist',['Requirements case study','Process diagram','Stakeholder scenario practice','Basic data skills','Clear documentation','Communication skills']]
    ]
  },
  {
    n:'12', name:'Product & Project Management', tone:'terracotta', intro:'Product and project professionals help teams decide what to build, why it matters, how to deliver it and how to measure progress.', tags:['Product','Projects','Delivery'],
    sections:[
      ['What is Product & Project Work?','Product management focuses on product value, users and outcomes. Project management focuses on coordinating work toward defined goals, constraints and delivery outcomes.'],
      ['Career Tree',['Product Analyst','Product Manager','Product Owner','Project Coordinator','Project Manager','Program Manager','Delivery Manager']],
      ['Core Skills',['Prioritization','Communication','Planning','Stakeholder management','Metrics','Risk management','Agile practices','Decision making']],
      ['Technology Stack',['Jira','Confluence','Product analytics','Roadmapping tools','Documentation tools','Collaboration platforms']],
      ['AI · Manual · Hybrid','AI can assist with research synthesis, planning drafts, summaries and documentation. Product and project decisions still require human context, accountability and stakeholder alignment.'],
      ['Work Process',['Understand outcome','Research','Prioritize','Plan','Coordinate','Deliver','Measure','Learn & iterate']],
      ['Learning Roadmap',['Product/project fundamentals','Agile','Requirements','Metrics','Stakeholder management','Real case studies','Tool practice','Interview preparation']],
      ['Role Progression',['Coordinator / Associate','Product or Project Manager','Senior Manager','Lead / Program Manager','Director / Head of Product or Delivery']],
      ['Job-Readiness Checklist',['Case studies','Prioritization exercise','Roadmap example','Metrics understanding','Stakeholder scenarios','Clear communication']]
    ]
  },
  {
    n:'13', name:'Architecture', tone:'darkcopper', intro:'Architecture defines how technology systems are structured, integrated and evolved to meet technical and business needs.', tags:['Systems','Solutions','Enterprise'],
    sections:[
      ['What is Architecture?','Architecture is the practice of making and communicating high-level technical decisions about system structure, interfaces, constraints, quality attributes and evolution.'],
      ['Career Tree',['Software Architect','Solutions Architect','Cloud Architect','Data Architect','Security Architect','Enterprise Architect']],
      ['Core Skills',['System design','Architecture patterns','Trade-off analysis','Integration','Security','Scalability','Reliability','Communication']],
      ['Technology Stack',['APIs','Cloud platforms','Databases','Messaging systems','Containers','Identity','Observability','Architecture diagrams']],
      ['AI · Manual · Hybrid','AI can help compare patterns, draft diagrams and explore alternatives. Architects remain responsible for constraints, trade-offs, governance and final technical decisions.'],
      ['Work Process',['Understand goals','Capture constraints','Explore options','Evaluate trade-offs','Design','Communicate','Govern','Evolve']],
      ['Learning Roadmap',['Software fundamentals','System design','Distributed systems','Cloud','Security','Data','Architecture patterns','Real-world case studies']],
      ['Role Progression',['Senior Engineer','Software / Solutions Architect','Senior Architect','Principal Architect','Enterprise / Architecture Leadership']],
      ['Job-Readiness Checklist',['System-design practice','Architecture diagrams','Trade-off explanations','Cloud understanding','Security/reliability awareness','Real system case studies']]
    ]
  },
  {
    n:'14', name:'Embedded & IoT', tone:'ironoxide', intro:'Embedded and IoT engineers connect software with physical devices, sensors, controllers and real-world environments.', tags:['Hardware','Firmware','IoT'],
    sections:[
      ['What is Embedded & IoT?','Embedded systems combine hardware and software to perform dedicated functions. IoT systems connect devices, sensors and services to collect, process or exchange information.'],
      ['Career Tree',['Embedded Software Engineer','Firmware Engineer','IoT Engineer','Embedded Systems Engineer','Edge AI Engineer','Hardware–Software Integration Engineer']],
      ['Core Skills',['C / C++','Microcontrollers','Digital electronics','Protocols','RTOS basics','Debugging','Hardware interfaces','Systems thinking']],
      ['Technology Stack',['Microcontrollers','C / C++','RTOS','UART / SPI / I2C','Sensors','MQTT','Linux embedded systems','Edge AI platforms']],
      ['AI · Manual · Hybrid','AI can assist with code drafts, documentation and debugging ideas. Engineers must validate timing, memory, hardware behavior, safety and real-device constraints.'],
      ['Work Process',['Define device need','Select hardware','Design firmware','Integrate peripherals','Test on hardware','Connect / communicate','Validate','Deploy & maintain']],
      ['Learning Roadmap',['C fundamentals','Digital electronics','Microcontrollers','Embedded C/C++','Protocols','RTOS','IoT/cloud integration','Projects']],
      ['Role Progression',['Junior Embedded Engineer','Embedded / Firmware Engineer','Senior Engineer','Lead / Architect','Embedded Systems Technical Lead']],
      ['Job-Readiness Checklist',['Microcontroller project','C/C++ fundamentals','Hardware debugging','Protocol knowledge','Git','Documentation','Real-device demo']]
    ]
  }
];

function renderValue(value){
  if(Array.isArray(value)) return `<div class="component-grid">${value.map((x,i)=>`<div class="component-card" style="--i:${i}">${x}</div>`).join('')}</div>`;
  return `<p>${value}</p>`;
}

const atlas=document.getElementById('atlas');
domains.forEach((domain)=>{
  const section=document.createElement('section');
  section.className=`role-page domain ${domain.tone}`;
  section.dataset.role=domain.name.toLowerCase().replace(/[^a-z0-9]+/g,'-');
  section.innerHTML=`
    <div class="role-hero">
      <span class="eyebrow">${domain.n} · CAREER DOMAIN</span>
      <h2>${domain.name}</h2>
      <p>${domain.intro}</p>
      <div class="role-tags">${domain.tags.map(t=>`<span>${t}</span>`).join('')}</div>
    </div>
    <div class="chapters">
      ${domain.sections.map((s,i)=>`
        <article class="atlas-section section-${i+1}">
          <span>${domain.n}.${i+1}</span>
          <div class="section-body">
            <h3>${s[0]}</h3>
            ${renderValue(s[1])}
          </div>
        </article>`).join('')}
    </div>`;
  atlas.appendChild(section);
});

const dots=document.querySelector('.page-dots');
[...document.querySelectorAll('.role-page')].forEach((page,i)=>{
  const dot=document.createElement('button');
  dot.className=`dot${i===0?' active':''}`;
  dot.setAttribute('aria-label',i===0?'Home':page.querySelector('h2')?.textContent||`Page ${i}`);
  dots.appendChild(dot);
});
