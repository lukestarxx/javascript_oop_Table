new gridjs.Grid({
    columns: ["Name", "Email", "Phone Number"],
    data: [
      ["Luke", "KafkaBlade@example.com", "08123456789"],
      ["Steele", "trailblazer@gmail.com", "08129876543"],
      ["Tingyun", "tingtotheyun@gmail.com", "089511790087"]

  
    ],
    
    
    
    pagination : {
        limit : 5,
    },
    sort : true,
    search:{
        enable:true
    },

    style: {
        td: {
          border: '1px solid #ccc'
        },
        table: {
          'font-size': '15px'
        }
      },

   
  }).render(document.getElementById("Datatable"));