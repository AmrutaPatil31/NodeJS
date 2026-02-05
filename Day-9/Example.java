class Student{
    int a;
    Student(int a){
        a=a;
    }
    void display(){
        System.out.println("in display"+a);
    }
}

class Example{
    public static void main(String args[]){
        Student s=new Student(10);
        s.display();
    }
}