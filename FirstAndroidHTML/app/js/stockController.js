/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function myController($scope){
        //I didn't wanted to use window.alert() to show that controller is called first
          console.log("First: Inside AngularJS Controller: called when DOM tree is created");
  
          //Stock price object.
        
          $scope.testVar=6;
          $scope.stockPrice = {
                "Google":  "600$",
                "Microsoft": "400$",
                "VMWare": "500$"
        };
         
         $scope.reduceVarOnClick = function (){
             
           alert("Value is"+ $scope.testVar);  
             
         };
          //Select VMWare by default
       // $scope.selectedCompany = "VMWare";
    
}
