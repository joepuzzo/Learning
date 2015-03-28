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
  
  //Like JPanel 
  UIView *view = [ [ UIView alloc] initWithFrame:myRect ];
  
  //Use a default color to set a property of the view 
  view.backgroundColor = [UIColor lightGrayColor];

  //To create custom RGB colors 
  [UIColor colorWithRed:0.5 green:0.5 blue:0.5 alpha:1.0];

  //Give the viewcontroller a view ( Like giving a Jpanel a Graphics 2D object )
  viewController.view = view;

  //Set the windows main view controller to the view controller. 
  self.window.rootViewController = viewController;
  
  //Add a key listener 
  [self.window makeKeyAndVisible];

  //Log out the screen size 
  NSLog(@"Screen is %f tall and %f wide", myRect.size.height, myRect.size.width);
  
  return YES;
}
@end
