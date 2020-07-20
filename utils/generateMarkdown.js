function generateMarkdown(data) {
  var badge = ""
  var MITbadge = "https://img.shields.io/badge/License-MIT-yellow.svg"
  var ISCbadge = "https://img.shields.io/badge/License-ISC-blue.svg"

     if( data.licenses === "MIT"){
        badge = MITbadge

     }else if( data.licenses === "ISC"){
        badge = ISCbadge
     }else{
         return "No badges were selected"
     }
  
  return ( `
  # ${data.title} \n
  ${data.description}\n
  
  #Installation\n
  ${data.installation} \n
  #Usage
  ${data.usage} \n
  #License \n
  ![](${badge})\n
  #Contributors\n
  ${data.contributors}\n
  #Tests\n
  ${data.tests}\n
  #GitHub Info\n
  ${data.githubemail}\n
  ${data.githubusername}\n
`)
   
}

module.exports = generateMarkdown;