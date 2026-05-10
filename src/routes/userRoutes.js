const {protectRoute, professor1, userData} =require('../../middleware/middleware')
const { getIndex, updateUsername, logout, deleteUser, getCbt } = require('../controllers/controller')
const router=require("express").Router()



// crud
router.post("/update", updateUsername)
router.post("/delete", deleteUser)


router.get('/', getIndex)

router.get('/homepage', protectRoute, (req, res)=>{
    res.render('pages/others/index', {layout:'layouts/userLayout'})
})

router.get('/mockexam', protectRoute, (req, res)=>{

       let level_number=req.params
let courseCode={}
let courses={
    
        1:"General studies",
        2:"Mathematics",
        3:"Statistics",
        4:"Computer Science",
        5:"Data Science",
        6:"Chemistry",
        7:"Biology",
        8:"Geology",
        9:"Geophysics",
        10:"Geography",
        11:"Physics",
        12:"NIgerian People & Culture",
        13:"Introduction to Agrictultural Science"

}
courseCode=courses
    res.render('pages/others/mockexam', {layout:'layouts/userLayout', courseCode})
})
router.get('/mockexam/:coursecode', protectRoute,(req, res)=>{
    let course=req.params.coursecode
    let coursecode={}
   let code={
    
        "General studies":{
            "1":{
          
            "firstDisplay":"Essential foundation courses for academic and cultural development",
              "codeOfCourse":"GST111",
            "coursedisplay":"Communication in English",

            "coursemeaning":"English language and communication skills development for academic and professional contexts. English Language and communication skills** courses cover phonetics, phonology, word classes, sentence structure, grammar, logical reasoning, copyright, essay writing, summaries, reports, CVs, comprehension strategies, public speaking, listening, word formation, and ICT. These essential topics develop academic and professional communication competence. Practice questions are compiled from past examinations to ensure comprehensive preparation.",

            "courseFooter":"General Studies (GST) courses are mandatory for all first-year university students. They provide essential skills and knowledge that form the foundation for academic success and cultural awareness.These courses help students develop critical thinking, communication abilities, and cultural understanding necessary for both academic and professional environments.Practice questions are compiled from past examination papers spanning multiple academic years to ensure comprehensive preparation."
        }
    
            
        },

        "Mathematics":{
            
            "1":{
               
            "firstDisplay":"Essential foundation courses for [specific purpose]",
             "codeOfCourse":"Math101",
            "coursedisplay":"Elementary Mathematics I",
            "coursemeaning":"Elementary mathematics covering set theory, functions and mrouterings, number systems, inequalities, surds, indices and logarithms, mathematical induction, matrices, and algebraic operations. Provides foundational mathematical tools for advanced scientific and engineering routerlications",

            "courseFooter":"Mathematics (MATH) courses are mandatory for all first-year university students. They provide essential skills and knowledge that form the foundation for scientific reasoning and analytical problem-solving. These courses help students develop logical thinking, quantitative analysis abilities, and mathematical modeling skills necessary for both academic and professional environments. Practice questions are compiled from past examination papers spanning multiple academic years to ensure comprehensive preparation."
            }
          },

        "Statistics":{

            "1":{
               
            "firstDisplay":"Essential foundation courses for [specific purpose]",
             "codeOfCourse":"STA112",
            "coursedisplay":"Probability I",
            "coursemeaning":"Probability I courses focus on foundational probability concepts including sample spaces, events, probability axioms, conditional probability, random variables, and probability distributions. These essential topics develop analytical reasoning and statistical thinking crucial for data analysis and scientific routerlications. Practice questions are compiled from past examinations to ensure comprehensive preparation",

            "courseFooter":"Statistics courses are mandatory for all first-year statistics university students. They provide essential skills and knowledge that form the foundation for data analysis and statistical reasoning. These courses help students develop analytical thinking, quantitative interpretation abilities, and statistical modeling skills necessary for both academic and professional environments. Practice questions are compiled from past examination papers spanning multiple academic years to ensure comprehensive preparation."
            } 
        },

        "Computer Science":{
            "1":{
                "firstDisplay":"Essential foundation courses for computational thinking and programming",
                "codeOfCourse":"COS101/CPT111/CSC101",
                "coursedisplay":"Introduction to Computing Science",
                "coursemeaning":"Introduction to Computing Science courses provide foundational knowledge in computer programming, algorithms, and computational problem-solving. These courses cover essential programming concepts, basic data structures, algorithmic thinking, and software development principles. Students learn to analyze problems and design computational solutions using programming languages.",
                "courseFooter":"Computing Science courses are mandatory for all first-year computer science students. They provide essential skills in logical thinking, problem-solving, and software development that form the basis for advanced computing studies and professional careers in technology. Practice questions are compiled from past examination papers spanning multiple academic years to ensure comprehensive preparation."
                }

        },


        "Data Science":{
             "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
        },
        "Chemistry":{
           "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
        },
        "Biology":{
           "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
          
        },
        "Geology":{
           "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
        },
        "Geophysics":{
            "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
           
        },
        "Geography":{
            "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
           
        },
        "Physics":{
           "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
        },
        "NIgerian People & Culture":{
          "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
        },

         "Introduction to Agrictultural Science":{
          "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
        }


   
   }
   coursecode=code[course]

    res.render('pages/others/mockexamCourse', {layout:'layouts/userLayout', coursecode, course})

})



router.get('/mocktest', protectRoute, (req, res)=>{
   let level_number=req.params
let courseCode={}
let courses={
    
        1:"General studies",
        2:"Mathematics",
        3:"Statistics",
        4:"Computer Science",
        5:"Data Science",
        6:"Chemistry",
        7:"Biology",
        8:"Geology",
        9:"Geophysics",
        10:"Geography",
        11:"Physics",
        12:"NIgerian People & Culture",
        13:"Introduction to Agrictultural Science"

}
courseCode=courses
    res.render('pages/others/mocktest',{layout:'layouts/userLayout',courseCode})
})
router.get("/mocktest/:coursecode",protectRoute,(req, res)=>{
let course=req.params.coursecode
    let coursecode={}
   let code={
    
        "General studies":{
            "1":{
          
            "firstDisplay":"Essential foundation courses for academic and cultural development",
              "codeOfCourse":"GST111",
            "coursedisplay":"Communication in English",

            "coursemeaning":"English language and communication skills development for academic and professional contexts. English Language and communication skills** courses cover phonetics, phonology, word classes, sentence structure, grammar, logical reasoning, copyright, essay writing, summaries, reports, CVs, comprehension strategies, public speaking, listening, word formation, and ICT. These essential topics develop academic and professional communication competence. Practice questions are compiled from past examinations to ensure comprehensive preparation.",

            "courseFooter":"General Studies (GST) courses are mandatory for all first-year university students. They provide essential skills and knowledge that form the foundation for academic success and cultural awareness.These courses help students develop critical thinking, communication abilities, and cultural understanding necessary for both academic and professional environments.Practice questions are compiled from past examination papers spanning multiple academic years to ensure comprehensive preparation."
        }
    
            
        },

        "Mathematics":{
            
            "1":{
               
            "firstDisplay":"Essential foundation courses for [specific purpose]",
             "codeOfCourse":"Math101",
            "coursedisplay":"Elementary Mathematics I",
            "coursemeaning":"Elementary mathematics covering set theory, functions and mrouterings, number systems, inequalities, surds, indices and logarithms, mathematical induction, matrices, and algebraic operations. Provides foundational mathematical tools for advanced scientific and engineering routerlications",

            "courseFooter":"Mathematics (MATH) courses are mandatory for all first-year university students. They provide essential skills and knowledge that form the foundation for scientific reasoning and analytical problem-solving. These courses help students develop logical thinking, quantitative analysis abilities, and mathematical modeling skills necessary for both academic and professional environments. Practice questions are compiled from past examination papers spanning multiple academic years to ensure comprehensive preparation."
            }
          },

        "Statistics":{

            "1":{
               
            "firstDisplay":"Essential foundation courses for [specific purpose]",
             "codeOfCourse":"STA112",
            "coursedisplay":"Probability I",
            "coursemeaning":"Probability I courses focus on foundational probability concepts including sample spaces, events, probability axioms, conditional probability, random variables, and probability distributions. These essential topics develop analytical reasoning and statistical thinking crucial for data analysis and scientific routerlications. Practice questions are compiled from past examinations to ensure comprehensive preparation",

            "courseFooter":"Statistics courses are mandatory for all first-year statistics university students. They provide essential skills and knowledge that form the foundation for data analysis and statistical reasoning. These courses help students develop analytical thinking, quantitative interpretation abilities, and statistical modeling skills necessary for both academic and professional environments. Practice questions are compiled from past examination papers spanning multiple academic years to ensure comprehensive preparation."
            } 
        },

        "Computer Science":{
            "1":{
                "firstDisplay":"Essential foundation courses for computational thinking and programming",
                "codeOfCourse":"COS101/CPT111/CSC101",
                "coursedisplay":"Introduction to Computing Science",
                "coursemeaning":"Introduction to Computing Science courses provide foundational knowledge in computer programming, algorithms, and computational problem-solving. These courses cover essential programming concepts, basic data structures, algorithmic thinking, and software development principles. Students learn to analyze problems and design computational solutions using programming languages.",
                "courseFooter":"Computing Science courses are mandatory for all first-year computer science students. They provide essential skills in logical thinking, problem-solving, and software development that form the basis for advanced computing studies and professional careers in technology. Practice questions are compiled from past examination papers spanning multiple academic years to ensure comprehensive preparation."
                }

        },


        "Data Science":{
             "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
        },
        "Chemistry":{
           "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
        },
        "Biology":{
           "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
          
        },
        "Geology":{
           "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
        },
        "Geophysics":{
            "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
           
        },
        "Geography":{
            "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
           
        },
        "Physics":{
           "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
        },
        "NIgerian People & Culture":{
          "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
        },

         "Introduction to Agrictultural Science":{
          "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
        }


   
   }
   coursecode=code[course]

    res.render('pages/others/mocktestCourse', {layout:'layouts/UserLayout', coursecode, course})
})


router.get('/quickquiz', protectRoute, (req, res)=>{      
    let level_number=req.params
let courseCode={}
let courses={
    
        1:"General studies",
        2:"Mathematics",
        3:"Statistics",
        4:"Computer Science",
        5:"Data Science",
        6:"Chemistry",
        7:"Biology",
        8:"Geology",
        9:"Geophysics",
        10:"Geography",
        11:"Physics",
        12:"NIgerian People & Culture",
        13:"Introduction to Agrictultural Science"

}
courseCode=courses
    res.render('pages/others/quickquiz',{layout:'layouts/userLayout',courseCode})
})

router.get("/quickquiz/:coursecode",protectRoute, (req, res)=>{
    let course=req.params.coursecode
    let coursecode={}
   let code={
    
        "General studies":{
            "1":{
          
            "firstDisplay":"Essential foundation courses for academic and cultural development",
              "codeOfCourse":"GST111",
            "coursedisplay":"Communication in English",

            "coursemeaning":"English language and communication skills development for academic and professional contexts. English Language and communication skills** courses cover phonetics, phonology, word classes, sentence structure, grammar, logical reasoning, copyright, essay writing, summaries, reports, CVs, comprehension strategies, public speaking, listening, word formation, and ICT. These essential topics develop academic and professional communication competence. Practice questions are compiled from past examinations to ensure comprehensive preparation.",

            "courseFooter":"General Studies (GST) courses are mandatory for all first-year university students. They provide essential skills and knowledge that form the foundation for academic success and cultural awareness.These courses help students develop critical thinking, communication abilities, and cultural understanding necessary for both academic and professional environments.Practice questions are compiled from past examination papers spanning multiple academic years to ensure comprehensive preparation."
        }
    
            
        },

        "Mathematics":{
            
            "1":{
               
            "firstDisplay":"Essential foundation courses for [specific purpose]",
             "codeOfCourse":"Math101",
            "coursedisplay":"Elementary Mathematics I",
            "coursemeaning":"Elementary mathematics covering set theory, functions and mrouterings, number systems, inequalities, surds, indices and logarithms, mathematical induction, matrices, and algebraic operations. Provides foundational mathematical tools for advanced scientific and engineering routerlications",

            "courseFooter":"Mathematics (MATH) courses are mandatory for all first-year university students. They provide essential skills and knowledge that form the foundation for scientific reasoning and analytical problem-solving. These courses help students develop logical thinking, quantitative analysis abilities, and mathematical modeling skills necessary for both academic and professional environments. Practice questions are compiled from past examination papers spanning multiple academic years to ensure comprehensive preparation."
            }
          },

        "Statistics":{

            "1":{
               
            "firstDisplay":"Essential foundation courses for [specific purpose]",
             "codeOfCourse":"STA112",
            "coursedisplay":"Probability I",
            "coursemeaning":"Probability I courses focus on foundational probability concepts including sample spaces, events, probability axioms, conditional probability, random variables, and probability distributions. These essential topics develop analytical reasoning and statistical thinking crucial for data analysis and scientific routerlications. Practice questions are compiled from past examinations to ensure comprehensive preparation",

            "courseFooter":"Statistics courses are mandatory for all first-year statistics university students. They provide essential skills and knowledge that form the foundation for data analysis and statistical reasoning. These courses help students develop analytical thinking, quantitative interpretation abilities, and statistical modeling skills necessary for both academic and professional environments. Practice questions are compiled from past examination papers spanning multiple academic years to ensure comprehensive preparation."
            } 
        },

        "Computer Science":{
            "1":{
                "firstDisplay":"Essential foundation courses for computational thinking and programming",
                "codeOfCourse":"COS101/CPT111/CSC101",
                "coursedisplay":"Introduction to Computing Science",
                "coursemeaning":"Introduction to Computing Science courses provide foundational knowledge in computer programming, algorithms, and computational problem-solving. These courses cover essential programming concepts, basic data structures, algorithmic thinking, and software development principles. Students learn to analyze problems and design computational solutions using programming languages.",
                "courseFooter":"Computing Science courses are mandatory for all first-year computer science students. They provide essential skills in logical thinking, problem-solving, and software development that form the basis for advanced computing studies and professional careers in technology. Practice questions are compiled from past examination papers spanning multiple academic years to ensure comprehensive preparation."
                }

        },


        "Data Science":{
             "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
        },
        "Chemistry":{
           "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
        },
        "Biology":{
           "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
          
        },
        "Geology":{
           "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
        },
        "Geophysics":{
            "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
           
        },
        "Geography":{
            "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
           
        },
        "Physics":{
           "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
        },
        "NIgerian People & Culture":{
          "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
        },

         "Introduction to Agrictultural Science":{
          "1":{
                "firstDisplay":"  ",
                "codeOfCourse":"   ",
                "coursedisplay":"   ",
                "coursemeaning":"    ",
                "courseFooter":"     "
                }
        }


   
   }
   coursecode=code[course]

    res.render('pages/others/quickquizCourse', {layout:'layouts/userLayout', coursecode, course})
  
})


    router.get('/ai', protectRoute, (req, res)=>{
    res.render('pages/others/ai', {layout:'layouts/userLayout'})
})


    router.get('/leaderboard',protectRoute, (req, res)=>{
    res.render('pages/others/leaderboard', {layout:'layouts/userLayout'})
})

// study_materials
    router.get('/materials',protectRoute, (req, res)=>{
    res.render('pages/others/study_materials', {layout:'layouts/userLayout'})
})

// history
    router.get('/history',protectRoute, (req, res)=>{
    res.render('pages/others/history', {layout:'layouts/userLayout'})
})

// profile
    router.get('/profile',protectRoute, (req, res)=>{
    res.render('pages/others/profile', {layout:'layouts/userLayout'})
})

// cbt
router.get('/cbt', getCbt)



router.use(userData)




module.exports=router