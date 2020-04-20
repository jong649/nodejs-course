const greeter = (name = "User", age) => {
  console.log(`Hello ${name}. You are ${age}`);
};

greeter("Jon", 38);
greeter();
