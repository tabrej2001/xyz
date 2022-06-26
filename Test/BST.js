class TreeNode{


    constructor(val,left=null,right=null)
    {
        this.val=val;
        this.left=left;
        this.right=right;
    }

 
}


class BSTiterator{

    

constructor(node){
this.BST=node;
}

hasnext()
{
    if(BST.left || BST.right)
    {
       
        return true;

    }else{
        return false;
    }
}

getnext()
{
    let root=BST;

    if(root==null)
    {
        return -1;
    }

    while(root.left!=null)
    {
        root=root.left;
    }

   return root.val;
}



}


//Hardcoding the BST  given in example

let root=new TreeNode(5);
let left1=new TreeNode(3);
let right1=new TreeNode(7);
let leftofleft1=new TreeNode(1);
let rightofleft1=new TreeNode(4);
let rightofright1=new TreeNode(8);




root.left=left1;
root.right1=right1;
left1.left=leftofleft1;
left1.right=rightofleft1;
right1.right=rightofright1;



let BST=new BSTiterator(root);

// Calling hasnext function

let hasNext=BST.hasnext();
console.log(hasNext);

if(hasNext)
{
    console.log(`BST has the next element`);
}else{
    console.log(`BST does not have next element`);
}

let getNext=BST.getnext();

console.log(`Next smallest element is ${getNext}`);


