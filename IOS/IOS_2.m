/*
*This is refactored code were the view object is taken out of the app delegate and inserted into the view controller.m
*It is good to note theat there is already a property in the application for a view .. i.e self.view 
*/

/******************** In AppDelegate.m  *********************/


#import "AppDelegate.h"

@implementation AppDelegate
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  //Create a rectange for size of main screen
  CGRect myRect = [ [ UIScreen mainScreen ] bounds ];
  
  //Initialize this applications window variable to a new UIWindow initiilized with the rectangle 
  self.window = [ [UIWindow alloc ] initWithFrame:myRect ];
    
  //Create a View Controller object (Like Graphics2D object)
  UIViewController *viewController = [ [ UIViewController alloc ] init];
  
  

  //Set the windows main view controller to the view controller. 
  self.window.rootViewController = viewController;
  
  //Add a key listener 
  [self.window makeKeyAndVisible];

  //Log out the screen size 
  NSLog(@"Screen is %f tall and %f wide", myRect.size.height, myRect.size.width);
  
  return YES;
}
@end


/******************** In view controller.m *********************/

//There is an "initializing" method 

- (void) loadView
{

  //Create a rectange for size of main screen
  CGRect myRect = [ [ UIScreen mainScreen ] bounds ];

  //Like JPanel 
  UIView *view = [ [ UIView alloc] initWithFrame:myRect ];

  //Give the self a view ( Like giving a Jpanel a Graphics 2D object )
  self.view = view;
}

//Called after load view
- (void)viewDidLoad
{
  //Use a default color to set a property of the view 
  view.backgroundColor = [UIColor lightGrayColor];

  UIButton *greenButton = [UIButton buttonWithType:UIButtonTypeRoundedRect];
  greenButton.frame = CGRectMake(120, 200, 100, 44);
  [greenButton setTitle:@"Make green!" forState:UIControlStateNormal];

  //Add the reciever(target) the action(method to execute) and the event to triger this event(pressed..ect)
  [greenButton addTarget:self action:@selector(buttonPressed:) forControlEvents:UIControlEventTouchUpInside];

  //This is how you add subviews i.e add a jpanel to a jpanel 
  [self.view addSubview:greenButton];

}

- (void) buttonPressed:(UIButton *) aButton
{
  //Compare buttons via the built in comparable object methods
  if( aButton isEqual:self.greenbutton )
  {
    //Change the background color 
    self.view.backgroundColor = [UIColor greenColor];
  }
  else
  {
    //Change the background color 
    self.view.backgroundColor = [UIColor blueColor];
  }
}







